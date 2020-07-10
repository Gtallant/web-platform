import React from 'react';
import { ThemeProvider, AppBar, Headline } from 'component-library';

function App() {
  return (
    <ThemeProvider>
      <AppBar color={'#fff'} fontColor={'#000'} elevation={2}>
        <Headline>Admin Panel</Headline>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
