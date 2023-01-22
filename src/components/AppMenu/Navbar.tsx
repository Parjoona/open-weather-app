import {
  Flex,
  Title,
  Navbar as MantineNavbar,
  ScrollArea,
  NavLink,
  MediaQuery,
  Stack,
} from '@mantine/core';
import { IconCloud, IconSettings } from '@tabler/icons';
import { FC } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import Links from './Links';

interface IProps {
  open: boolean;
}

const Navbar: FC<IProps> = ({ open }) => {
  const { pathname } = useLocation();

  return (
    <MantineNavbar
      p='xs'
      hiddenBreakpoint='sm'
      hidden={!open}
      width={{ base: 275 }}
    >
      <MantineNavbar.Section mx='xs' px='xs'>
        <RouterLink to='/' style={{ color: '#fff', textDecoration: 'none' }}>
          <Stack spacing='xs' mt={10} align='center'>
            <IconCloud size={50} />

            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Flex align='center' justify='center'>
                <Title size={14} style={{ lineHeight: 1.6 }} order={2}>
                  The weather blast
                </Title>
              </Flex>
            </MediaQuery>
          </Stack>
        </RouterLink>
      </MantineNavbar.Section>

      <MantineNavbar.Section
        mt={36}
        grow
        component={ScrollArea}
        mx='xs'
        px='xs'
      >
        <Links />
      </MantineNavbar.Section>

      <MantineNavbar.Section mx='xs' px='xs'>
        <NavLink
          component={RouterLink}
          active={pathname === '/settings'}
          to='/settings'
          label='Settings'
          icon={<IconSettings size={16} stroke={1.5} />}
        />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
