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
