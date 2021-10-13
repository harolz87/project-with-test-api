import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { RootState } from '../../store';

import { Alert } from '../../components/alert';

import { useAlertErrorActions } from '../../hooks/actions/useAlertErrorActions';

export const AlertError = (): JSX.Element => {
  const errors = useSelector((state: RootState) => state.alertError.errors);
  const errorActions = useAlertErrorActions();

  return (
    <Box sx={{ width: '100%' }}>
      <Alert
        open={errors.length !== 0}
        severity="error"
        closeFunc={errorActions.reset}
      >
        <ul>
          {
            errors.map((error, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`error-${index}`}>
                {error}
              </li>
            ))
          }
        </ul>
      </Alert>
    </Box>
  );
};
