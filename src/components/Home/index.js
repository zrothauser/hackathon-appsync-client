import React from 'react';
import { Link } from '@reach/router';
import { Query } from 'react-apollo';

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
        console.error('Error!', error);
        return 'Error loading post';
      }

      const posts = data.posts.edges;

      return (
        <div>
          <h1>Home</h1>
          <ul>
            {posts.map(({ node: { title }, node: { slug } }) => (
              <li key={slug}>
                <Link to={`posts/${slug}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default Home;
