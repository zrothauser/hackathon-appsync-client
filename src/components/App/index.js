import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';
import { Router, Link } from '@reach/router';
import {
  Container,
  Menu,
  Segment,
  Grid,
  Header,
  List,
} from 'semantic-ui-react';

import 'typeface-shrikhand/index.css';

import 'semantic-ui-css/semantic.min.css';

import appSyncClient from '../../api/appsync-client';

import Home from '../Home';
import Reviews from '../Reviews';
import Post from '../Post';

const NotFound = () => (<div>404</div>);

const App = () => (
  <div>
    <Segment>
      <Menu fixed="top" inverted style={{ background: '#060327' }}>
        <Container>
          <Menu.Item
            header
            style={{ fontFamily: 'Shrikhand, cursive', fontSize: '32px', fontWeight: '400' }}
          >
            <Link to="/">GAMEZ</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/">News</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/reviews/">Reviews</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/">Platforms</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/">Community</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Router>
        <Home path="/" />
        <Reviews path="/reviews/" />
        <Post path="/posts/:slug" />
        <NotFound default />
      </Router>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em', background: '#060327' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a" href="https://github.com/zrothauser/hackathon-appsync-client">
                  Github
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
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
