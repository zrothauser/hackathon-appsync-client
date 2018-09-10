import React from 'react';
import { Link } from '@reach/router'
import Inbox from '../Inbox';

const posts = [
  {
    title: 'The Next Big Thing in React',
    body: 'Something',
    author: 'Probably',
    timestamp: 'today',
    id: 1234,
    slug: 'the-next-big-thing-in-react',
  },
  {
    title: 'WordPress: Expectations vs. Reality',
    body: 'Something',
    author: 'Probably',
    timestamp: 'today',
    id: 1235,
    slug: 'wordpress-expectations-vs-reality',
  },
];

const Home = () => (
  <div>
    <h1>Home</h1>
    <ul>
      {posts.map(({ title, slug }) => (
        <li>
          <Link to={`posts/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
    <Inbox />
  </div>
);

export default Home;
