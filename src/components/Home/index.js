import React from 'react';
import { Query } from 'react-apollo';
import {
  Container,
  Item,
} from 'semantic-ui-react';

import PostExcerpt from '../PostExcerpt';

import wordpressClient from '../../api/wordpress-client';
import QUERY_POSTS from '../../graphql/posts';

const Home = () => (
  <Query
    query={QUERY_POSTS}
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

      const posts = data.posts.edges;

      console.log(posts); // eslint-disable-line no-console

      return (
        <Container text>
          {posts.length ?
            <Item.Group divided>
              {posts.map(({ node: { title }, node: { slug } }) => (
                <PostExcerpt
                  key={slug}
                  title={title}
                  url={`posts/${slug}`}
                  imageURL={`https://loremflickr.com/320/240/dog?${Math.random()}`}
                />
              ))
              }
            </Item.Group>
          : 'No posts found'
          }
        </Container>
      );
    }}
  </Query>
);

export default Home;
