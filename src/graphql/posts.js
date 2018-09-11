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
