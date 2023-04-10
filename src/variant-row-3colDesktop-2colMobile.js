import { row } from '@wordpress/icons';
import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation( 'core/group', {
  name: 'row-3colDesktop-2colMobile',
  title: 'row that has 3 columns on desktop nd 2 on mobile',
  description: 'a row for icons and stuff that has 3 columns on desktop and 2 on mobile',
  icon: row,
  scope: [ 'block', 'inserter', 'transform' ],
  keywords: [ 'row', 'scrolling', 'scroll' ],
  attributes: {
    className: 'row-3colDesktop-2colMobile',
    layout: { type: 'flex', flexWrap: 'wrap' }
  }
})