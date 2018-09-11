import React from 'react';
import { Query } from "react-apollo";
import { Container, Header } from 'semantic-ui-react'

import Inbox from '../Inbox';

import wordpressClient from '../../api/wordpress-client';
import QUERY_POST from '../../graphql/post';

const Post = ({ slug }) => {
  return (
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
          console.error('Error!', error);
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
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>
              {title}
            </Header>
            <div>
              <div>Author: {author}</div>
              <div>Posted at: {timestamp}</div>
              <div>Content:</div>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
            <div>
              <span>Reactions:</span>
            </div>
            <div>
              <span>Comments:</span>
              <Inbox />
            </div>
          </Container>
        );
      }}
    </Query>
  )
};

export default Post;