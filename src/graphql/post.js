import gql from 'graphql-tag';

const QUERY = gql`
  query Post($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      date
      content
    }
  }
`;

export default QUERY;