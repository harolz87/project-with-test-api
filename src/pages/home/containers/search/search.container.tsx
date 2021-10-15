import React from 'react';
import TextField from '@mui/material/TextField';
import { useFilter } from '../hooks/useFilter';

export const SearchInput = (): JSX.Element => {
  const { onChange } = useFilter();
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
