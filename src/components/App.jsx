import React from 'react';
import Header from './layout/Header';
import Main from './layout/Main';

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
