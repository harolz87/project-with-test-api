import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Routes } from './routes';
import { Load } from './containers/load';
import './global.css';

export const App = (): JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<div />}>
        <Routes />
        <Load />
      </Suspense>
    </PersistGate>
  </Provider>
);
