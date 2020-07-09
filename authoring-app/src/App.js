import React from 'react';
import logo from './logo.svg';
import { AppBar, Column, Icon, Headline} from 'component-library';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar color="#ffffff">
        <Column align='left' width='shrink'>
          <Icon name='MENU' />
        </Column>
        <Column>
          <Headline level={1}>App Bar</Headline>
        </Column>
        <Column align='right' width='shrink'>
          <Icon name='MAGNIFYING_GLASS' />
        </Column>
      </AppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
