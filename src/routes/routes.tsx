import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { PrivateRoute } from './privateRoute';

import { Layout } from '../containers/layout';

import { ROOT_ROUTE } from '../config/env';

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
          path={`${ROOT_ROUTE}/login`}
          component={Login}
        />
        <PrivateRoute
          exact
          path={ROOT_ROUTE}
          component={Home}
          routeRedirect={`${ROOT_ROUTE}/login`}
        />
        <PrivateRoute
          exact
          path={`${ROOT_ROUTE}/detail/:id`}
          component={Detail}
          routeRedirect={`${ROOT_ROUTE}/login`}
        />
        <PrivateRoute
          exact
          path={`${ROOT_ROUTE}/favs`}
          component={Favs}
          routeRedirect={`${ROOT_ROUTE}/login`}
        />
        <PrivateRoute
          exact
          path={`${ROOT_ROUTE}/dummy`}
          component={Dummy}
          routeRedirect={`${ROOT_ROUTE}/login`}
        />
        <Route component={NoFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
