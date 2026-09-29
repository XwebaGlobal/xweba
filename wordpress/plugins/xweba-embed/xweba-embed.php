<?php
/**
 * Plugin Name: Xweba Studio Interactive Embed
 * Plugin URI: https://xweba.com
 * Description: Embed the complete Xweba Global Studio interactive web platform, GEO diagnostic tool, and scope calculator into any WordPress page via shortcode [xweba_studio].
 * Version: 1.0.0
 * Author: Xweba Studio
 * Author URI: https://xweba.com
 * License: MIT
 * Text Domain: xweba-embed
 */

if (!defined('ABSPATH')) {
    exit;
}

define('XWEBA_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('XWEBA_PLUGIN_URI', plugin_dir_url(__FILE__));

/**
 * 1. Register Shortcode [xweba_studio]
 */
function xweba_studio_shortcode($atts) {
    $atts = shortcode_atts(array(
        'full_width' => 'true',
    ), $atts, 'xweba_studio');

    // Enqueue React application assets on-demand
    xweba_plugin_enqueue_assets();

    $wrapper_class = ($atts['full_width'] === 'true') ? 'xweba-full-width' : 'xweba-contained';

    ob_start();
    ?>
    <div class="xweba-plugin-wrapper <?php echo esc_attr($wrapper_class); ?>">
      <div id="root">
        <noscript>
          <div style="padding:20px;text-align:center;">
            <h3>JavaScript Required</h3>
            <p>Please enable JavaScript to access the interactive Xweba Studio tools.</p>
          </div>
        </noscript>
      </div>
    </div>
    <style>
      .xweba-plugin-wrapper.xweba-full-width {
        width: 100vw;
        max-width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        position: relative;
        background: #03090e;
      }
    </style>
    <?php
    return ob_get_clean();
}
add_shortcode('xweba_studio', 'xweba_studio_shortcode');

/**
 * 2. Enqueue Compiled Assets for Plugin
 */
function xweba_plugin_enqueue_assets() {
    static $enqueued = false;
    if ($enqueued) {
        return;
    }
    $enqueued = true;

    wp_enqueue_style(
        'xweba-google-fonts',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&display=swap',
        array(),
        null
    );

    $assets_dir = XWEBA_PLUGIN_DIR . 'assets';
    $css_file = '';
    $js_file = '';

    if (is_dir($assets_dir)) {
        $files = scandir($assets_dir);
        foreach ($files as $file) {
            if (preg_match('/^index-.*\.css$/', $file)) {
                $css_file = $file;
            }
            if (preg_match('/^index-.*\.js$/', $file)) {
                $js_file = $file;
            }
        }
    }

    if (!empty($css_file)) {
        wp_enqueue_style(
            'xweba-plugin-css',
            XWEBA_PLUGIN_URI . 'assets/' . $css_file,
            array(),
            filemtime(XWEBA_PLUGIN_DIR . 'assets/' . $css_file)
        );
    }

    if (!empty($js_file)) {
        wp_enqueue_script(
            'xweba-plugin-js',
            XWEBA_PLUGIN_URI . 'assets/' . $js_file,
            array(),
            filemtime(XWEBA_PLUGIN_DIR . 'assets/' . $js_file),
            true
        );

        $wp_data = array(
            'restUrl'    => esc_url_raw(rest_url()),
            'nonce'      => wp_create_nonce('wp_rest'),
            'siteName'   => get_bloginfo('name'),
            'siteUrl'    => esc_url(home_url('/')),
            'pluginUrl'  => esc_url(XWEBA_PLUGIN_URI),
            'adminEmail' => get_option('admin_email'),
        );
        wp_add_inline_script('xweba-plugin-js', 'window.wpData = ' . wp_json_encode($wp_data) . ';', 'before');
    }
}

/**
 * 3. Add type="module" to Plugin JS
 */
function xweba_plugin_script_loader_tag($tag, $handle, $src) {
    if ('xweba-plugin-js' === $handle) {
        return '<script type="module" crossorigin src="' . esc_url($src) . '"></script>' . "\n";
    }
    return $tag;
}
add_filter('script_loader_tag', 'xweba_plugin_script_loader_tag', 10, 3);

/**
 * 4. REST API Endpoint & Inquiries Handling (if Theme is not active)
 */
add_action('rest_api_init', function() {
    if (function_exists('xweba_register_rest_routes')) {
        return; // Avoid duplicate if theme is also active
    }
    register_rest_route('xweba/v1', '/consultation', array(
        'methods'             => 'POST',
        'callback'            => 'xweba_plugin_handle_consultation',
        'permission_callback' => '__return_true',
    ));
});

function xweba_plugin_handle_consultation($request) {
    $params = $request->get_json_params();
    $name   = sanitize_text_field($params['name'] ?? '');
    $email  = sanitize_email($params['email'] ?? '');

    if (empty($name) || empty($email) || !is_email($email)) {
        return new WP_REST_Response(array('success' => false, 'message' => 'Invalid email or name.'), 400);
    }

    $lead = array(
        'id'             => uniqid('lead_'),
        'name'           => $name,
        'email'          => $email,
        'company'        => sanitize_text_field($params['company'] ?? ''),
        'currentWebsite' => esc_url_raw($params['currentWebsite'] ?? ''),
        'projectFocus'   => sanitize_text_field($params['projectFocus'] ?? ''),
        'budgetTier'     => sanitize_text_field($params['budgetTier'] ?? ''),
        'timeline'       => sanitize_text_field($params['timeline'] ?? ''),
        'notes'          => sanitize_textarea_field($params['notes'] ?? ''),
        'date'           => current_time('mysql'),
    );

    $inquiries = get_option('xweba_inquiries', array());
    if (!is_array($inquiries)) {
        $inquiries = array();
    }
    array_unshift($inquiries, $lead);
    update_option('xweba_inquiries', array_slice($inquiries, 0, 200), false);

    $admin_email = get_option('admin_email');
    $subject     = sprintf('[%s] New Studio Consultation Lead: %s', get_bloginfo('name'), $lead['company'] ?: $name);
    $body        = "New consultation request from Xweba plugin:\n\n" . print_r($lead, true);
    @wp_mail($admin_email, $subject, $body);

    return new WP_REST_Response(array('success' => true, 'leadId' => $lead['id']), 200);
}
