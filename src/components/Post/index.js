import React from 'react';
import { Query } from "react-apollo";

import {
  Container,
  Header,
} from 'semantic-ui-react'

import Inbox from '../Inbox';

import QUERY_POST from '../../graphql/post';

import posts from '../../test-data';

const Post = ({ slug }) => {
  const data = posts[0];

  return (
    <Query query={QUERY_POST} variables={{ slug }}>
      {({ loading, error, data }) => {
        if (loading) {
          return null;
        }

        if (error) {
          console.error(`Error!: ${error}`);
          return 'Error loading post';
        }

        const {
          title,
          author,
          timestamp,
          content,
        } = data;

        return (
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>
              {title}
            </Header>
            <div>
              <div>Author: {author}</div>
              <div>Posted at: {timestamp}</div>
              <div>{content}</div>
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