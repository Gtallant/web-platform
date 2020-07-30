import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, AppBar, Headline, Row, Column } from 'component-library';
import Login from '../login/Login';

function App() {
  const { token } = useSelector(state => state.auth);
  return (
    <ThemeProvider>
      <AppBar color={'#C7C7D3'} fontColor={'#000'} elevation={2}>
        <Headline>Admin Panel</Headline>
      </AppBar>
      <Row align="center">
        {
          token ? (
            <Column width={4}>
              <Headline>Test</Headline>
            </Column>
          ) : (
            <Login />
          )
        }
      </Row>
    </ThemeProvider>
  );
}


export default App;
