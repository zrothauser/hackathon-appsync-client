import React, { Component } from 'react';
import { Link } from '@reach/router';
import { Query } from 'react-apollo';

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
      <div>
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
              return 'Error loading post';
            }

            console.log(data); // eslint-disable-line no-console

            const posts = data.getByTitle;

            return (
              <div>
                <h1>Reviews</h1>
                <div>
                  <ul>
                    {posts.map(({ node: { title }, node: { slug } }) => (
                      <li key={slug}>
                        <Link to={`posts/${slug}`}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Reviews;
