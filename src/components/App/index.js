import React, { Component } from 'react';

import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { Router, Link } from "@reach/router"

import {
  Container,
  Menu,
} from 'semantic-ui-react'

import Home from '../Home';
import Post from '../Post';

import 'semantic-ui-css/semantic.min.css';

import APPSYNC_CONFIG from '../../appsync-config';

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

const client = new AWSAppSyncClient({
  url: APPSYNC_CONFIG.graphqlEndpoint,
  region: APPSYNC_CONFIG.region,
  auth: {
    type: APPSYNC_CONFIG.authenticationType,
    apiKey: APPSYNC_CONFIG.apiKey,
  },
  cacheOptions: {
    dataIdFromObject: (obj) => {
      let id = defaultDataIdFromObject(obj);

      if (!id) {
        const { __typename: typename } = obj;
        switch (typename) {
          case 'Comment':
            return `${typename}:${obj.commentId}`;
          default:
            return id;
        }
      }

      return id;
    }
  }
});

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
