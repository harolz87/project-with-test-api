import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
