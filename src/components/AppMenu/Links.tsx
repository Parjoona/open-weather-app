import { FC } from 'react';
import { NavLink, Stack } from '@mantine/core';
import { IconLayoutDashboard, IconLocation } from '@tabler/icons';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';

const Links: FC = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => path === pathname;

  return (
    <Stack spacing='xs'>
      <NavLink
        component={RouterLink}
        to='/'
        active={isActive('/')}
        label='Dashboard'
        icon={<IconLayoutDashboard size={20} stroke={1.5} />}
      />

      <NavLink
        component={RouterLink}
        to='/saved'
        active={isActive('/saved')}
        label='Saved Locations'
        icon={<IconLocation size={20} stroke={1.5} />}
      />
    </Stack>
  );
};

export default Links;
