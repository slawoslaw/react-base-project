import React from 'react';
import BoxList from '../box/BoxList';
import technologies from '../../assets/technologies.json';
import { TechnologiesParser } from '../../services/technologies';

export default class Technologies extends React.Component {
  constructor(props) {
    super(props);
    this.items = TechnologiesParser(technologies);
  }
  render() {
    return (
      <div className="technologies">
        <h1>Technologies</h1>
        <BoxList items={this.items} />
      </div>
    );
  }
}
