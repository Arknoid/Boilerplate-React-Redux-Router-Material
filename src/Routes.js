import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ScrollToTop from './components/ScrollToTop';
import FourOhFour from './components/FourOhFour';

const Routes = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={FourOhFour} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default Routes;
