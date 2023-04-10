import { row } from '@wordpress/icons';
import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation( 'core/group', {
  name: 'scrolling-row',
  title: 'row that scrolls horizontally',
  description: 'A simple way to display a row of content that scroll horizontally',
  icon: row,
  scope: [ 'block', 'inserter', 'transform' ],
  keywords: [ 'row', 'scrolling', 'scroll' ],
  attributes: {
    className: 'has-horizontal-scrolling',
    layout: { type: 'flex', flexWrap: 'nowrap' }
  },
  isActive: ( blockAttributes ) =>
  blockAttributes.layout?.type === 'flex' &&
  ( ! blockAttributes.layout?.orientation ||
    blockAttributes.layout?.orientation === 'horizontal' ),
})