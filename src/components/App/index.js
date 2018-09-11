import React, { Component } from 'react';

import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import { Router, Link } from "@reach/router"
import { Container, Menu } from 'semantic-ui-react'

import appSyncClient from '../../api/appsync-client';

import Home from '../Home';
import Post from '../Post';

import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item>
              <Link to="/">AppSync Client</Link>
            </Menu.Item>
          </Container>
        </Menu>

        <Router>
          <Home path="/" />
          <Post path="/posts/:slug" />
        </Router>
      </div>
    );
  }
}

const WithProvider = () => (
  <ApolloProvider client={appSyncClient}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
