import gql from 'graphql-tag';

export default gql`
  query MatchingReviews($title: String!) {
    getReviewByTitle(title: $title) {
      id
      title
          year
      genre
      score
      url
    }
  }
`;
