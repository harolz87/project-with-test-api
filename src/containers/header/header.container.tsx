import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material//AppBar';
import Toolbar from '@mui/material//Toolbar';
import Button from '@mui/material//Button';
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
