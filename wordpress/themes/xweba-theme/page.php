<?php
/**
 * Default Page Template
 *
 * @package Xweba
 */

get_header();

// If this is the front page or home, load the Xweba interactive application
if (is_front_page() || is_home()) :
?>
  <div id="root"></div>
<?php
else :
  // Standard WordPress inner page fallback
?>
  <main class="max-w-4xl mx-auto px-6 py-24 text-slate-100 min-h-[60vh]">
    <?php
    while (have_posts()) :
        the_post();
    ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="mb-8">
          <h1 class="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white mb-4"><?php the_title(); ?></h1>
        </header>
        <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; ?>
  </main>
<?php
endif;

get_footer();
