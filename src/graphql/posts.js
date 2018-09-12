import gql from 'graphql-tag';

export default gql`
query listPosts {
  listPosts{
    items{
      id
      title
      excerpt
      slug
      date
      featured_image_url
    }
  }
}
`;
