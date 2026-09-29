<?php
/**
 * Xweba Global Studio Theme Functions
 *
 * @package Xweba
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * 1. Theme Setup
 */
function xweba_theme_setup() {
    // Let WordPress manage document title
    add_theme_support('title-tag');

    // Enable featured images
    add_theme_support('post-thumbnails');

    // Switch default core markup to HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));

    // Support responsive embeds
    add_theme_support('responsive-embeds');

    // Support custom logo
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'xweba'),
        'footer'  => __('Footer Navigation', 'xweba'),
    ));
}
add_action('after_setup_theme', 'xweba_theme_setup');

/**
 * 2. Enqueue Compiled Vite / React Assets
 */
function xweba_enqueue_scripts() {
    $theme_dir = get_template_directory();
    $theme_uri = get_template_directory_uri();

    // Enqueue Google Fonts (Syne, Plus Jakarta Sans, JetBrains Mono)
    wp_enqueue_style(
        'xweba-google-fonts',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&display=swap',
        array(),
        null
    );

    // Enqueue Theme Style.css (WP requirement)
    wp_enqueue_style('xweba-theme-style', get_stylesheet_uri(), array(), '1.0.0');

    // Auto-discover Vite compiled CSS and JS in assets/
    $assets_dir = $theme_dir . '/assets';
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
            'xweba-app-css',
            $theme_uri . '/assets/' . $css_file,
            array('xweba-theme-style'),
            filemtime($theme_dir . '/assets/' . $css_file)
        );
    }

    if (!empty($js_file)) {
        wp_enqueue_script(
            'xweba-app-js',
            $theme_uri . '/assets/' . $js_file,
            array(),
            filemtime($theme_dir . '/assets/' . $js_file),
            true
        );

        // Inject WordPress API information to React application
        $wp_data = array(
            'restUrl'    => esc_url_raw(rest_url()),
            'nonce'      => wp_create_nonce('wp_rest'),
            'siteName'   => get_bloginfo('name'),
            'siteUrl'    => esc_url(home_url('/')),
            'themeUrl'   => esc_url($theme_uri),
            'adminEmail' => get_option('admin_email'),
        );
        wp_add_inline_script('xweba-app-js', 'window.wpData = ' . wp_json_encode($wp_data) . ';', 'before');
    }
}
add_action('wp_enqueue_scripts', 'xweba_enqueue_scripts');

/**
 * 3. Add type="module" to React ES Module Script Tag
 */
function xweba_script_loader_tag($tag, $handle, $src) {
    if ('xweba-app-js' === $handle) {
        return '<script type="module" crossorigin src="' . esc_url($src) . '"></script>' . "\n";
    }
    return $tag;
}
add_filter('script_loader_tag', 'xweba_script_loader_tag', 10, 3);

/**
 * 4. WordPress REST API Endpoint for Consultations / Inquiries
 * Accessible at: POST /wp-json/xweba/v1/consultation
 */
function xweba_register_rest_routes() {
    register_rest_route('xweba/v1', '/consultation', array(
        'methods'             => 'POST',
        'callback'            => 'xweba_handle_consultation_submission',
        'permission_callback' => '__return_true', // Public lead submission
    ));
}
add_action('rest_api_init', 'xweba_register_rest_routes');

function xweba_handle_consultation_submission($request) {
    $params = $request->get_json_params();

    $name           = sanitize_text_field($params['name'] ?? '');
    $email          = sanitize_email($params['email'] ?? '');
    $company        = sanitize_text_field($params['company'] ?? '');
    $currentWebsite = esc_url_raw($params['currentWebsite'] ?? '');
    $projectFocus   = sanitize_text_field($params['projectFocus'] ?? '');
    $budgetTier     = sanitize_text_field($params['budgetTier'] ?? '');
    $timeline       = sanitize_text_field($params['timeline'] ?? '');
    $notes          = sanitize_textarea_field($params['notes'] ?? '');

    if (empty($name) || empty($email) || !is_email($email)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Valid name and email address are required.',
        ), 400);
    }

    $lead = array(
        'id'             => uniqid('lead_'),
        'name'           => $name,
        'email'          => $email,
        'company'        => $company,
        'currentWebsite' => $currentWebsite,
        'projectFocus'   => $projectFocus,
        'budgetTier'     => $budgetTier,
        'timeline'       => $timeline,
        'notes'          => $notes,
        'date'           => current_time('mysql'),
    );

    // Save into WordPress Database
    $inquiries = get_option('xweba_inquiries', array());
    if (!is_array($inquiries)) {
        $inquiries = array();
    }
    array_unshift($inquiries, $lead); // Add new lead to the beginning
    // Keep last 200 inquiries
    $inquiries = array_slice($inquiries, 0, 200);
    update_option('xweba_inquiries', $inquiries, false);

    // Send email notification to site admin
    $admin_email = get_option('admin_email');
    $site_name   = get_bloginfo('name');
    $subject     = sprintf('[%s] New Studio Consultation: %s (%s)', $site_name, $company ?: $name, $budgetTier);

    $body = "New consultation request submitted through Xweba Studio on your website:\n\n";
    $body .= "Client Name: {$name}\n";
    $body .= "Work Email: {$email}\n";
    $body .= "Company / Organization: {$company}\n";
    $body .= "Current Domain: {$currentWebsite}\n";
    $body .= "Project Focus: {$projectFocus}\n";
    $body .= "Budget Allocation: {$budgetTier}\n";
    $body .= "Desired Timeline: {$timeline}\n";
    $body .= "Brief Notes:\n{$notes}\n\n";
    $body .= "--\nSubmitted on " . current_time('F j, Y, g:i a') . "\n";
    $body .= "View all inquiries in WP Admin: " . admin_url('admin.php?page=xweba-inquiries');

    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $name . ' <' . $email . '>',
    );

    @wp_mail($admin_email, $subject, $body, $headers);

    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Consultation inquiry recorded successfully.',
        'leadId'  => $lead['id'],
    ), 200);
}

/**
 * 5. WP-Admin Dashboard: "Xweba Leads" Menu
 */
function xweba_admin_menu() {
    add_menu_page(
        __('Xweba Leads', 'xweba'),
        __('Xweba Leads', 'xweba'),
        'manage_options',
        'xweba-inquiries',
        'xweba_render_inquiries_page',
        'dashicons-chart-line',
        30
    );
}
add_action('admin_menu', 'xweba_admin_menu');

function xweba_render_inquiries_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    // Handle single lead deletion
    if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['lead_id']) && check_admin_referer('xweba_delete_lead')) {
        $lead_id = sanitize_text_field($_GET['lead_id']);
        $inquiries = get_option('xweba_inquiries', array());
        $inquiries = array_filter($inquiries, function($l) use ($lead_id) {
            return ($l['id'] ?? '') !== $lead_id;
        });
        update_option('xweba_inquiries', array_values($inquiries), false);
        echo '<div class="notice notice-success is-dismissible"><p>' . esc_html__('Lead deleted.', 'xweba') . '</p></div>';
    }

    $inquiries = get_option('xweba_inquiries', array());
    ?>
    <div class="wrap">
        <h1 style="display:flex;align-items:center;gap:10px;">
            <span style="color:#009fe3;font-weight:800;">Xweba Studio</span>
            <span><?php esc_html_e('— Client Consultation Inquiries', 'xweba'); ?></span>
        </h1>
        <p class="description">
            <?php esc_html_e('Inquiries submitted via the interactive GEO Audit, Scope Calculator, and Discovery Brief forms on your website.', 'xweba'); ?>
        </p>

        <div style="background:#fff;border:1px solid #ccd0d4;border-radius:8px;padding:16px;margin-top:20px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
                <strong><?php printf(esc_html__('Total Leads Captured: %d', 'xweba'), count($inquiries)); ?></strong>
                <span style="font-size:12px;color:#666;">Notifications dispatched to: <code><?php echo esc_html(get_option('admin_email')); ?></code></span>
            </div>

            <?php if (empty($inquiries)) : ?>
                <p style="padding:40px 0;text-align:center;color:#888;">
                    <?php esc_html_e('No inquiries recorded yet. When prospective clients complete the discovery brief, they will appear here.', 'xweba'); ?>
                </p>
            <?php else : ?>
                <table class="wp-list-table widefat fixed striped table-view-list" style="margin-top:10px;">
                    <thead>
                        <tr>
                            <th style="width:130px;"><?php esc_html_e('Date', 'xweba'); ?></th>
                            <th style="width:150px;"><?php esc_html_e('Client', 'xweba'); ?></th>
                            <th><?php esc_html_e('Company & Domain', 'xweba'); ?></th>
                            <th><?php esc_html_e('Service Focus', 'xweba'); ?></th>
                            <th style="width:130px;"><?php esc_html_e('Budget', 'xweba'); ?></th>
                            <th style="width:120px;"><?php esc_html_e('Timeline', 'xweba'); ?></th>
                            <th style="width:80px;text-align:center;"><?php esc_html_e('Action', 'xweba'); ?></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($inquiries as $item) : ?>
                            <tr>
                                <td><?php echo esc_html(mysql2date('M j, Y g:ia', $item['date'] ?? 'now')); ?></td>
                                <td>
                                    <strong><?php echo esc_html($item['name'] ?? ''); ?></strong><br>
                                    <a href="mailto:<?php echo esc_attr($item['email'] ?? ''); ?>"><?php echo esc_html($item['email'] ?? ''); ?></a>
                                </td>
                                <td>
                                    <strong><?php echo esc_html($item['company'] ?? '—'); ?></strong>
                                    <?php if (!empty($item['currentWebsite'])) : ?>
                                        <br><a href="<?php echo esc_url($item['currentWebsite']); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html($item['currentWebsite']); ?></a>
                                    <?php endif; ?>
                                </td>
                                <td>
                                    <span><?php echo esc_html($item['projectFocus'] ?? 'High-Performance Web Platform & GEO'); ?></span>
                                    <?php if (!empty($item['notes'])) : ?>
                                        <div style="font-size:11px;color:#555;margin-top:4px;background:#f9f9f9;padding:4px 8px;border-radius:4px;border-left:3px solid #009fe3;">
                                            <?php echo nl2br(esc_html($item['notes'])); ?>
                                        </div>
                                    <?php endif; ?>
                                </td>
                                <td>
                                    <span style="font-weight:600;color:#009fe3;"><?php echo esc_html($item['budgetTier'] ?? '—'); ?></span>
                                </td>
                                <td>
                                    <span><?php echo esc_html($item['timeline'] ?? '—'); ?></span>
                                </td>
                                <td style="text-align:center;">
                                    <?php
                                    $delete_url = wp_nonce_url(
                                        add_query_arg(array('page' => 'xweba-inquiries', 'action' => 'delete', 'lead_id' => $item['id']), admin_url('admin.php')),
                                        'xweba_delete_lead'
                                    );
                                    ?>
                                    <a href="<?php echo esc_url($delete_url); ?>" onclick="return confirm('Delete this inquiry?');" style="color:#d63638;text-decoration:none;" title="Delete lead">&times; Delete</a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php endif; ?>
        </div>
    </div>
    <?php
}
