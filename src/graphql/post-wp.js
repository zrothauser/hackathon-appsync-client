/**
 * Use this one if AppSync breaks and we go back to the WP GraphQL API.
 */

import gql from 'graphql-tag';

export default gql`
  query Post($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      modified
      content
    }
  }
`;
