import React from 'react';
import { Query, Subscription, Mutation } from 'react-apollo';
import { Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Reactions from '../Reactions';
import wordpressClient from '../../api/wordpress-client';
import QUERY_POST from '../../graphql/post';
import INBOX_SUB from '../../graphql/inboxSubscription';
import MESSAGE_MUTATION from '../../graphql/messageMutation';

let childAddReaction;
const Post = ({ slug }) => (
  <Query
    query={QUERY_POST}
    variables={{ slug }}
    client={wordpressClient}
  >
    {({ loading, error, data }) => {
        if (loading) {
          return null;
        }

        if (error) {
          console.error('Error!', error); // eslint-disable-line no-console
          return 'Error loading post';
        }

        const postData = data.postBy;

        const {
          title,
          author,
          timestamp,
          content,
        } = postData;

        return (
          <Container text>
            <Header as="h1">
              {title}
            </Header>
            <div>
              <div>Author: {author}</div>
              <div>Posted at: {timestamp}</div>
              <div>Content:</div>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div>
              <span>Reactions:</span>

              <Subscription
                subscription={INBOX_SUB}
                variables={{ context: slug }}
              >
                {(response) => {
                  if (!response.loading) {
                    // eslint-disable-next-line no-unused-expressions
                    typeof childAddReaction === 'function' && childAddReaction(response.data.inbox.body);
                  }
                  return (
                    <Mutation mutation={MESSAGE_MUTATION}>
                      {addReaction => (
                        <Reactions
                          onSelect={action =>
                            addReaction({
                              variables: {
                                context: slug,
                                body: action,
                              },
                            })}
                          setAddReaction={(childAddReactionProp) => {
                            childAddReaction = childAddReactionProp;
                          }}
                        />
                      )}
                    </Mutation>
                  );
                }}
              </Subscription>
            </div>
            <div>
              <span>Comments:</span>
            </div>
          </Container>
        );
      }}
  </Query>
);

Post.defaultProps = {
  slug: null,
};

Post.propTypes = {
  slug: PropTypes.string,
};

export default Post;
