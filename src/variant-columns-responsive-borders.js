import { registerBlockVariation } from '@wordpress/blocks';
import { SVG, Path } from '@wordpress/primitives';

const threeColRespBordersIcon = (
  <SVG xmlns="http://www.w3.org/2000/SVG" viewBox="0 0 48 48"><Path d="M14.7 35h1.4v1h-1.4zM20.4 35h-.9V13h.9v-1h-3.3v1h.4v22h-.4v1h3.3zM12.4 35h1.4v1h-1.4zM26 12h1.4v1H26zM36.5 35h1.6v1h-1.6zM21.3 12h1.4v1h-1.4zM10 35h1.4v1H10zM14.7 12h1.4v1h-1.4zM12.4 12h1.4v1h-1.4zM10 12h1.4v1H10zM23.7 12h1.4v1h-1.4zM34 35h1.6v1H34zM31.5 35h1.6v1h-1.6zM36.5 12h1.6v1h-1.6zM26 35h1.4v1H26zM21.3 35h1.4v1h-1.4zM34 12h1.6v1H34zM23.7 35h1.4v1h-1.4zM30.6 35h-.1V13h.1v-1h-2.2v1h.1v22h-.1v1h2.2zM31.5 12h1.6v1h-1.6zM7 31.3h1v1.6H7zM8 14.2V13h1.1v-1H9c-1.1 0-2 .9-2 2v.2h1zM7 26h1v1.6H7zM7 28.6h1v1.6H7zM7 20.6h1v1.6H7zM8 34H7c0 1.1.9 2 2 2h.1v-1H8v-1zM7 23.3h1v1.6H7zM7 15.3h1v1.6H7zM7 18h1v1.6H7zM40 26h1v1.6h-1zM40 31.3h1v1.6h-1zM40 28.6h1v1.6h-1zM40 23.3h1v1.6h-1zM40 14.2h1V14c0-1.1-.9-2-2-2v1h1v1.2zM40 34v1h-1v1c1.1 0 2-.9 2-2h-1zM40 15.3h1v1.6h-1zM40 18h1v1.6h-1zM40 20.6h1v1.6h-1z"/></SVG>
)

registerBlockVariation( 'core/columns', {
  name: 'three-columns-with-responsive-borders',
  title: '3 cols with responsive borders',
  description: 'borders between columns, but gone on mobile',
  icon: threeColRespBordersIcon,
  innerBlocks: [
    [ 'core/column' ],
    [ 'core/column' ],
    [ 'core/column' ],
  ],
  scope: [ 'block' ],
  keywords: [ 'columns', 'borders' ],
  attributes: {
    className: 'three-columns-with-responsive-borders',
  }
})