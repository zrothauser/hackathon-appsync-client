import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
  Container,
  Header,
  Form,
  Input,
  Item,
  Divider,
} from 'semantic-ui-react';

import ReviewExcerpt from '../ReviewExcerpt';

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
      <Container text>
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
              <React.Fragment>
                <Divider section />
                <div>
                  <Header
                    as="h3"
                    content="Results"
                  />

                  <Container>
                    {reviews.length ?
                      <Item.Group divided>
                        {reviews.map(review => (
                          <ReviewExcerpt
                            key={JSON.stringify(review)}
                            {...review}
                            imageURL={`https://loremflickr.com/320/240/dog?${Math.random()}`}
                          />
                        ))
                        }
                      </Item.Group>
                    : 'No reviews found'
                    }
                  </Container>
                </div>
              </React.Fragment>
            );
          }}
        </Query>
      </Container>
    );
  }
}

export default Reviews;
