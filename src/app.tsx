import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes } from './routes';
import './global.css';

export const App = (): JSX.Element => (
  <Suspense fallback={<div />}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Suspense>
);
