import {
  AppShell,
  Burger,
  Flex,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AppMenu: FC = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);

  const themeColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0];

  const handleOpen = () => setOpened((o) => !o);

  return (
    <AppShell
      padding='md'
      navbar={<Navbar open={opened} />}
      navbarOffsetBreakpoint='sm'
      header={
        <Header height={45}>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              m={7}
              opened={opened}
              onClick={handleOpen}
              size='sm'
              color={theme.colors.gray[0]}
              mr='xl'
            />
          </MediaQuery>

          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Flex align='center' justify='center'>
              <Title style={{ lineHeight: 1.6 }} order={2}>
                The weather blast
              </Title>
            </Flex>
          </MediaQuery>
        </Header>
      }
      styles={{
        main: {
          backgroundColor: themeColor,
        },
      }}
    >
      <Outlet />
    </AppShell>
  );
};

export default AppMenu;
