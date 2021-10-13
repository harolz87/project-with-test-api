import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { FooterMenu } from '../footer-menu';

export const Footer = (): JSX.Element => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <footer />
    );
  }

  return (
    <footer>
      <FooterMenu />
    </footer>
  );
};
