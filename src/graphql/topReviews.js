import gql from 'graphql-tag';

export default gql`
  query ByScore {
    getReviewByScore(score: "10.0") {
      id
      title
        year
      genre
      score
      url
    }
  }
`;

