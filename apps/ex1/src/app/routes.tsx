import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about exact" component={AboutPage} />
    </Switch>
  );
}

export default Routes;
