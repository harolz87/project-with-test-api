import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';

const INIT_VALUE = '/';

interface FooterMenuProps extends RouteComponentProps {
    className?: string;
}

const menuTabs = [
  {
    id: 1,
    label: 'Home',
    value: '/',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    label: 'dummy',
    value: '/dummy',
    icon: <AccountCircle />,
  },
];

export const FooterMenu = withRouter(({
  className,
  history,
  location,
}: FooterMenuProps): JSX.Element => {
  const [value, setValue] = useState(INIT_VALUE);
  useEffect((): void => {
    setValue(location.pathname);
  }, []);

  const handleChange = (event: React.ChangeEvent<any>, newValue: string): void => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      className={className}
      value={value}
      onChange={handleChange}
    >
      {
            menuTabs.map((tab): JSX.Element => (
              <BottomNavigationAction
                key={tab.id}
                label={tab.label}
                value={tab.value}
                icon={tab.icon}
                onClick={(): void => {
                  history.push(tab.value);
                }}
              />
            ))
        }
    </BottomNavigation>
  );
});
