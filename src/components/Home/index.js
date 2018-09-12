import React from 'react';
import { Query } from 'react-apollo';
import {
  Container,
  Item,
  Loader,
} from 'semantic-ui-react';

import PostExcerpt from '../PostExcerpt';

import QUERY_POSTS from '../../graphql/posts';

const Home = () => (
  <Query
    query={QUERY_POSTS}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <Loader>Loading</Loader>
        );
      }

      if (error) {
        console.error('Error!', error); // eslint-disable-line no-console
        return 'Error loading post';
      }

      const posts = data.listPosts.items;

      return (
        <Container text>
          {posts.length ?
            <Item.Group>
              {posts.map(({
                title,
                slug,
                excerpt,
                date,
                featured_image_url: featuredImageURL,
              }, index) => (
                <PostExcerpt
                  key={slug}
                  title={title}
                  excerpt={excerpt}
                  url={`posts/${slug}`}
                  date={date}
                  imageURL={featuredImageURL}
                  index={index}
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
