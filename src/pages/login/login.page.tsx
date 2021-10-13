import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { RootState } from '../../store';

import { useAlertErrorActions } from '../../hooks/actions/useAlertErrorActions';
import { useAuthActions } from '../../hooks/actions/useAuthActions';

export const Login = (): JSX.Element => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const history = useHistory();
  const alertErrorActions = useAlertErrorActions();
  const authActions = useAuthActions();
  
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const errors = [];
    if (!email || email.toString().trim() === '') {
      errors.push('The email field is mandatory');
    }

    if (!password || password.toString().trim() === '') {
      errors.push('The password field is mandatory');
    }

    if (errors.length > 0) {
      alertErrorActions.setErrors(errors);
      return;
    }

    alertErrorActions.reset();

    authActions.singup({
      userName: email,
      password,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
