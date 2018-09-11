import gql from 'graphql-tag';

export default gql`
{
    postBy(slug: $slug) {
      id
      title
      date
      content
      slug
    }
}`;