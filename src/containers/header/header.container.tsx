import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { RootState } from '../../store';
import './header.css';

export const Header = (): JSX.Element => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <AppBar position="static" className="header" />
    );
  }

  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <div className="header__menu" />
        <Button color="inherit" className="header__signup">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};
