import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './privateRoute';

import { Layout } from '../containers/layout';

const Login = React.lazy(() => import('../pages/login'));
const Home = React.lazy(() => import('../pages/home'));
const Dummy = React.lazy(() => import('../pages/dummy'));
const NoFound = React.lazy(() => import('../pages/no-found'));
const Favs = React.lazy(() => import('../pages/favs'));

export const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route
          exact
          path="/login"
          component={Login}
        />
        <PrivateRoute
          exact
          path="/"
          component={Home}
          routeRedirect="/login"
        />
        <PrivateRoute
          exact
          path="/favs"
          component={Favs}
          routeRedirect="/login"
        />
        <PrivateRoute
          exact
          path="/dummy"
          component={Dummy}
          routeRedirect="/login"
        />
        <Route component={NoFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
