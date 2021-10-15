import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { FooterMenu } from '../footer-menu';

import './footer.css';

export const Footer = (): JSX.Element => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <footer />
    );
  }

  return (
    <footer className="footer">
      <FooterMenu />
    </footer>
  );
};
