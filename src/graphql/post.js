import gql from 'graphql-tag';


export default gql`
  query getPostBySlug($slug: String!){
    getPostBySlug(slug: $slug){
      items {
        id
        title
        date
        content
        featured_image_url
      }
    }
  }
`;
