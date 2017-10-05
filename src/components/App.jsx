import React from 'react';
import Hello from './Hello.jsx';
import BoxList from './box/BoxList.jsx';
import technologies from '../assets/technologies.json';
import {TechnologiesParser} from '../services/technologies';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.items = TechnologiesParser(technologies)
  }

  render() {
    return (
      <div className="app">
        <Hello name="Jarek" />
        <BoxList items={this.items} />
      </div>);
  }
}
