import React from 'react';
import Header from './layout/Header.jsx';
import Main from './layout/Main.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}
