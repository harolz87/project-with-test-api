import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../../store';

import { useAlertErrorActions } from '../../../hooks/actions/useAlertErrorActions';
import { useAuthActions } from '../../../hooks/actions/useAuthActions';

interface UseLoginResult {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void ;
}

export const useLogin = (): UseLoginResult => {
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
    const errors = [];
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
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

  return { handleSubmit };
};
