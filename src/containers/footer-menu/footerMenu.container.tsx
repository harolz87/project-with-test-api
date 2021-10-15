import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ROOT_ROUTE } from '../../config/env';

interface FooterMenuProps extends RouteComponentProps {
    className?: string;
}

const menuTabs = [
  {
    id: 1,
    label: 'Home',
    value: ROOT_ROUTE,
    icon: <HomeIcon />,
  },
  {
    id: 2,
    label: 'Favorite',
    value: `${ROOT_ROUTE}/favs`,
    icon: <FavoriteIcon />,
  },
  {
    id: 3,
    label: 'Dummy',
    value: `${ROOT_ROUTE}/dummy`,
    icon: <AccountCircleIcon />,
  },
];

export const FooterMenu = withRouter(({
  className,
  history,
  location,
}: FooterMenuProps): JSX.Element => {
  const [value, setValue] = useState(ROOT_ROUTE);
  useEffect((): void => {
    setValue(location.pathname);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
