import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Technologies from '../views/Technologies';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/technologies' component={Technologies}/>
        </Switch>
      </main>
    );
  }
}
