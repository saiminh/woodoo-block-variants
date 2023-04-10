import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation( 'core/query', {
  name: 'partners-query',
  title: 'Partner Query',
  description: 'Displays a list of partners',
  scope: [ 'inserter' ],
  keywords: [ 'query', 'partner' ],
  attributes: {
    className: 'partners-query',
    namespace: 'partners-query',
    query: {
      postType: 'partners',
      perPage: 20, 
      offset: 0
    },
  },
  allowedControls: [],
  innerBlocks: [
    [
      'core/post-template',
      {},
      [
        [ 'core/group', 
          { 
            className: 'partners-query-wrapper has-base-color has-contrast-background-color has-text-color has-background',
            style: {"spacing":{"padding":{"top":"0","right": "0","left":"0","bottom":"var:preset|spacing|s"}}} 
          }, 
          [
            ['core/post-content']
          ]
        ]
      ]
    ],
    ['core/query-no-results'],
    [ 'core/group', 
      { className: 'navigation', layout: { type: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' } }, 
      [
        ['core/button', { text: 'left', className: 'partner-nav-left is-style-outline' }],
        ['core/button', { text: 'right', className: 'partner-nav-right is-style-outline' }]
      ]
    ]
  ],
  isActive: ( { namespace, query } ) => {
    return (
        namespace === 'partners-query'
        && query.postType === 'partners'
    );
  }
})