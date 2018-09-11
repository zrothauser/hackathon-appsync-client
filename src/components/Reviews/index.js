import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
  Container,
  Header,
  Form,
  Input,
} from 'semantic-ui-react';

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

        <Form>
          <Form.Group>
            <Form.Field
              id="search-form-field"
              control={Input}
              placeholder="Fake Review"
              label="Search for reviews"
              onChange={event => this.setState({ searchTerms: event.target.value })}
            />
          </Form.Group>
        </Form>

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

            const reviews = data.getReviewByTitle;

            return (
              <div>
                <h2>Results</h2>
                <div>
                  {reviews.length ?
                    <ul>
                      {reviews.map(({ title, url }) => (
                        <li key={url}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul> :
                    'No reviews found'
                  }
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
