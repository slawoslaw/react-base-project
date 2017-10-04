import React from 'react';
import Hello from './Hello.jsx';
import BoxList from './box/BoxList.jsx';
import technologies from '../assets/technologies.json';
import {TechnologiesParser} from '../services/technologies';

export default class App extends React.Component {
  render() {
    const items = TechnologiesParser(technologies);
    return (
      <div style={{textAlign: 'center'}}>
        <Hello name="Jarek" />
        <BoxList items={items} />
      </div>);
  }
}
