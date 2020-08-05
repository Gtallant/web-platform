import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, AppBar, Headline, Row, Column } from 'component-library';
import Login from '../login/Login';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PageList from '../pageList/PageList';

export const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND}/graphql`,
  cache: new InMemoryCache()
});

function App() {
  const { token } = useSelector(state => state.auth);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <AppBar color={'#C7C7D3'} fontColor={'#000'} elevation={2}>
          <Headline>Admin Panel</Headline>
        </AppBar>
        <Row align="center">
          {
            token ? (
              <Column width={4}>
                <PageList />
              </Column>
            ) : (
              <Login />
            )
          }
        </Row>
      </ThemeProvider>
    </ApolloProvider>
  );
}


export default App;
