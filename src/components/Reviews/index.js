import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
  Loader,
  Container,
  Header,
  Form,
  Input,
  Item,
} from 'semantic-ui-react';

import ReviewExcerpt from '../ReviewExcerpt';

import QUERY_REVIEWS from '../../graphql/searchReviews';
import QUERY_TOP_REVIEWS from '../../graphql/topReviews';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: '',
    };
  }

  render() {
    return (
      <Container text>
        <Header as="h1">
          Reviews
        </Header>

        <Form>
          <Form.Field
            id="search-form-field"
            control={Input}
            label="Search for reviews"
            onChange={event => this.setState({ searchTerms: event.target.value })}
            icon="search"
            iconPosition="left"
            style={{ margin: '0.5em 0 2.5em' }}
          />
        </Form>

        <Query
          query={(this.state.searchTerms ? QUERY_REVIEWS : QUERY_TOP_REVIEWS)}
          variables={{ title: this.state.searchTerms }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <Loader>Loading</Loader>
              );
            }

            if (error) {
              console.error('Error!', error); // eslint-disable-line no-console
              return (<div>Error loading post</div>);
            }

            const reviews = this.state.searchTerms ? data.getReviewByTitle : data.getReviewByScore;

            return (
              <React.Fragment>
                <Container>
                  {reviews.length ?
                    <React.Fragment>
                      <Header
                        as="h3"
                        content={(this.state.searchTerms ? 'Results' : 'Top reviewed games')}
                      />
                      <Item.Group
                        style={{
                          display: 'flex',
                          flexFlow: 'row wrap',
                          justifyContent: 'space-between',
                        }}
                      >
                        {reviews.map(review => (
                          <ReviewExcerpt
                            key={JSON.stringify(review)}
                            {...review}
                            imageURL={`https://loremflickr.com/640/480/dog?${Math.random()}`}
                          />
                        ))
                        }
                      </Item.Group>
                    </React.Fragment>
                  : 'No reviews found'
                  }
                </Container>
              </React.Fragment>
            );
          }}
        </Query>
      </Container>
    );
  }
}

export default Reviews;
