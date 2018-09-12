/**
 * Use this one if AppSync breaks and we go back to the WP GraphQL API.
 */

import gql from 'graphql-tag';

export default gql`
{
  posts {
    edges {
      node {
        id
        title
        slug
        modified
        excerpt
      }
    }
  }
}
`;
