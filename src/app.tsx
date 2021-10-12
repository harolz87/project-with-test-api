import React, { Suspense } from 'react';
import { Routes } from './routes';
import './global.css';

export const App = (): JSX.Element => (
  <Suspense fallback={<div />}>
    <Routes />
  </Suspense>
);
