import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RootState } from '../store';

interface PrivateRouteProps extends RouteProps {
  routeRedirect?: string;
  component: any,
}

export const PrivateRoute = ({
  component: Component,
  routeRedirect = '/',
  ...rest
}: PrivateRouteProps): JSX.Element | null => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props): JSX.Element => {
        if (isAuthenticated) {
          return (
            <Component {...props} />
          );
        }

        return (
          <Redirect
            to={routeRedirect}
          />
        );
      }}
    />
  );
};
