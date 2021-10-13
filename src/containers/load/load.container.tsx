import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Load as Loadmp } from '../../components/load';

export const Load = (): JSX.Element | null => {
  const isLoading = useSelector((state: RootState) => state.load.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <Loadmp />
  );
};
