import { Button, NavLink } from '@mantine/core';
import { IconLayoutDashboard, IconLocation } from '@tabler/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Links: FC = () => {
  return (
    <div>
      <NavLink
        component={Link}
        to='/'
        label='Dashboard'
        icon={<IconLayoutDashboard size={20} stroke={1.5} />}
      />
      <NavLink
        component={Link}
        to='/saved'
        label='Saved Locations'
        icon={<IconLocation size={20} stroke={1.5} />}
      />
    </div>
  );
};

export default Links;
