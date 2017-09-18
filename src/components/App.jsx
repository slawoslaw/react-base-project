import React from 'react';
import Hello from './Hello.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Hello name="Jarek" />
      </div>);
  }
}
