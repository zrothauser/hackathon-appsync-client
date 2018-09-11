import React from 'react';
import { Query } from "react-apollo";

import Inbox from '../Inbox';

import QUERY_POST from '../../graphql/post';

// import posts from '../../test-data';

const Post = ({ slug }) => {
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
          <article>
            <div>
              <h1>{title}</h1>
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
          </article>
        );
      }}
    </Query>
  )
};

export default Post;