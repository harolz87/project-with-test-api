import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { PrivateRoute } from './privateRoute';

import { Layout } from '../containers/layout';

const Login = React.lazy(() => import('../pages/login'));
const Home = React.lazy(() => import('../pages/home'));
const Dummy = React.lazy(() => import('../pages/dummy'));
const NoFound = React.lazy(() => import('../pages/no-found'));
const Favs = React.lazy(() => import('../pages/favs'));
const Detail = React.lazy(() => import('../pages/detail'));

export const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route
          exact
          path="/project-with-test-api/login"
          component={Login}
        />
        <PrivateRoute
          exact
          path="/project-with-test-api/"
          component={Home}
          routeRedirect="/project-with-test-api/login"
        />
        <PrivateRoute
          exact
          path="/project-with-test-api/detail/:id"
          component={Detail}
          routeRedirect="/login"
        />
        <PrivateRoute
          exact
          path="/favs"
          component={Favs}
          routeRedirect="/project-with-test-api/login"
        />
        <PrivateRoute
          exact
          path="/project-with-test-api/dummy"
          component={Dummy}
          routeRedirect="/project-with-test-api/login"
        />
        <Route component={NoFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
