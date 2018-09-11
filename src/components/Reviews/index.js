import React, { Component } from 'react';
import { Link } from '@reach/router';
import { Query } from 'react-apollo';
import { Container, Header } from 'semantic-ui-react';

import QUERY_REVIEWS from '../../graphql/searchReviews';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: '',
    };
  }

  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">
          Reviews
        </Header>
        <span>Search for reviews:</span>
        <input
          type="text"
          onChange={event => this.setState({ searchTerms: event.target.value })}
        />

        <Query
          query={QUERY_REVIEWS}
          variables={{ title: this.state.searchTerms }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return null;
            }

            if (error) {
              console.error('Error!', error); // eslint-disable-line no-console
              return (<div>Error loading post</div>);
            }

            console.log(data); // eslint-disable-line no-console

            const posts = data.getReviewByTitle;

            return (
              <div>
                <h1>Reviews</h1>
                <div>
                  <ul>
                    {posts.map(({ title, url }) => (
                      <li key={url}>
                        <Link to={`posts/${url}`}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          }}
        </Query>
      </Container>
    );
  }
}

export default Reviews;
