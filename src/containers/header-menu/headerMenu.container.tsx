import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const INIT_VALUE = 1;

interface HeaderMenuProps {
    className: string;
}

export const HeaderMenu = ({ className }: HeaderMenuProps): JSX.Element => {
  const [value, setValue] = useState(INIT_VALUE);
  useEffect(() => (): void => {
    setValue(INIT_VALUE);
  }, []);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className={className}
    >
      <Tab label="Active" />
      <Tab label="Disabled" />
      <Tab label="Active" />
    </Tabs>
  );
};
