import gql from 'graphql-tag';

export default gql`
  query MatchingReviews {
    getByTitle(title: "fake") {
      id
      title
          year
      genre
      score
    }
  }
`;
