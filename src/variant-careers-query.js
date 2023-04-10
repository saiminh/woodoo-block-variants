import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation( 'core/query', {
  name: 'careers-query',
  title: 'Job Query',
  description: 'Displays a list of jobs',
  scope: [ 'inserter' ],
  keywords: [ 'query', 'career', 'jobs' ],
  attributes: {
    className: 'careers-query',
    namespace: 'careers-query',
    query: {
      postType: 'careers',
      perPage: 100, 
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
            className: 'careers-query-wrapper',
            style: {"spacing":{"padding":{"top":"0","right": "0","left":"0","bottom":"var:preset|spacing|s"}}} 
          }, 
          [
            ['create-block/careers-block']
          ]
        ]
      ]
    ],
    ['core/query-no-results', {
      className: 'careers-query-no-results',
      title: 'No Jobs Found',
      description: 'There are no jobs available at this time. Please check back later.'
    }]
  ]
})