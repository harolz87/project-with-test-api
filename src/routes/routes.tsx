import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from '../containers/layout';

const Home = React.lazy(() => import('../pages/home'));
const NoFound = React.lazy(() => import('../pages/no-found'));

export const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route component={NoFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
