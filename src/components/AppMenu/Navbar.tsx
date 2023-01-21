import {
  Flex,
  Title,
  Navbar as MantineNavbar,
  ScrollArea,
  NavLink,
} from '@mantine/core';
import { IconCloud, IconSettings } from '@tabler/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => (
  <MantineNavbar width={{ base: 300 }} p='xs'>
    <MantineNavbar.Section>
      <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
        <Flex mt={10} justify='center' align='center' direction='column'>
          <IconCloud size={50} />
          <Title size={22}>Weather app</Title>
        </Flex>
      </Link>
    </MantineNavbar.Section>

    <MantineNavbar.Section mt={16} grow component={ScrollArea} mx='-xs' px='xs'>
      links to different pages comes here.
    </MantineNavbar.Section>

    <MantineNavbar.Section>
      <NavLink
        component={Link}
        to='/settings'
        label='Settings'
        icon={<IconSettings size={16} stroke={1.5} />}
      />
    </MantineNavbar.Section>
  </MantineNavbar>
);

export default Navbar;
