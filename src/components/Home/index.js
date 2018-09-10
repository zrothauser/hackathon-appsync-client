import React from 'react';
import { Link } from '@reach/router'
import Inbox from '../Inbox';

import posts from '../../test-data';

const Home = () => (
  <div>
    <h1>Home</h1>
    <ul>
      {posts.map(({ title, slug }) => (
        <li key={slug}>
          <Link to={`posts/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
    <Inbox />

  </div>
);

export default Home;
