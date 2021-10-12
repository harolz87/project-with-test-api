import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { HeaderMenu } from '../header-menu';

import './header.css';

export const Header = (): JSX.Element => (
  <AppBar position="static" className="header">
    <Toolbar>
      <HeaderMenu className="header__menu" />
      <Button color="inherit" className="header__signup">Signup</Button>
    </Toolbar>
  </AppBar>
);
