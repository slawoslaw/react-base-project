import React from 'react';
import { NavLink } from 'react-router-dom'

export default class MainMenu extends React.Component {
  render() {
    return (
      <nav className="main-menu">
        <ul>
          <li><NavLink activeClassName="active" exact to='/'>Home</NavLink></li>
          <li><NavLink activeClassName="active" to='/technologies'>Technologies</NavLink></li>
        </ul>
      </nav>
    );
  }
}
