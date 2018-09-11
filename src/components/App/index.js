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

import 'semantic-ui-css/semantic.min.css';

import appSyncClient from '../../api/appsync-client';

import Home from '../Home';
import Reviews from '../Reviews';
import Post from '../Post';
import Reactions from '../Reactions';

const NotFound = () => (<div>404</div>);

const App = () => (
  <div>
    <Segment inverted>
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
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Router>
        <Home path="/" />
        <Reviews path="/reviews/" />
        <Post path="/posts/:slug" />
        <Reactions path="/reactions" />
        <NotFound default />
      </Router>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
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
