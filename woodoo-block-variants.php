<?php
/**
 * Plugin Name:       Woodoo Block Variants
 * Description:       Some block variants for the Woodoo theme.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Simon Flöter
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       woodoo-block-variants
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_woodoo_block_variants_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_woodoo_block_variants_block_init' );

function enqueue_woodoo_block_variants_frontend_assets() {

  // global $post;

  // if( $post && strpos( $post->post_content, 'three-columns-with-responsive-borders' ) !== false) {
    wp_enqueue_style(
        'woodoo-block-variants-frontend-styles',
        plugins_url('/build/style-index.css', __FILE__)        
    );
  // }
    wp_enqueue_script( 
      'woodoo-block-varoiants-frontend-scripts', 
      plugins_url('/build/view.js', __FILE__), array(), null, true 
    );
}
add_action( 'enqueue_block_assets', 'enqueue_woodoo_block_variants_frontend_assets' );