import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import { useHomeActions } from '../../../../hooks/actions/useHomeActions';

export const SearchInput = (): JSX.Element => {
  const timer = useRef<any>(null);
  const homeActions = useHomeActions();

  const onChange = (event: any): void => {
    const { value } = event.target;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      homeActions.setFilter(value);
    }, 500);
  };

  return (
    <TextField
      margin="normal"
      fullWidth
      id="search"
      label="local filter"
      name="search"
      autoFocus
      onChange={onChange}
    />
  );
};
