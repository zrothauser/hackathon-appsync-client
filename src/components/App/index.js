import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';
import { Router, Link } from '@reach/router';
import { Container, Menu } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import appSyncClient from '../../api/appsync-client';

import Home from '../Home';
import Reviews from '../Reviews';
import Post from '../Post';
import Reactions from '../Reactions';

const NotFound = () => (<div>404</div>);

const App = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Link to="/">GAMEZ</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/reviews/">Reviews</Link>
        </Menu.Item>
      </Container>
    </Menu>

    <Router>
      <Home path="/" />
      <Reviews path="/reviews/" />
      <Post path="/posts/:slug" />
      <Reactions path="/reactions" />
      <NotFound default />
    </Router>
  </div>
);

const WithProvider = () => (
  <ApolloProvider client={appSyncClient}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
