import {
  AppShell,
  Burger,
  Center,
  Flex,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { FC, useState } from 'react';
import Navbar from './Navbar';

interface IProps {
  children: React.ReactNode;
}

const AppMenu: FC<IProps> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);

  const themeColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0];

  const handleOpen = () => setOpened((o) => !o);

  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      padding='md'
      navbar={<Navbar open={opened} />}
      header={
        <Header height={60}>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Flex>
              <Burger
                m={7}
                opened={opened}
                onClick={handleOpen}
                size='sm'
                color={theme.colors.gray[0]}
                mr='xl'
              />
            </Flex>
          </MediaQuery>

          <Center>
            <Title style={{ lineHeight: 2 }} order={2}>
              The weather app
            </Title>
          </Center>
        </Header>
      }
      styles={{
        main: {
          backgroundColor: themeColor,
        },
      }}
    >
      <Center>{children}</Center>
    </AppShell>
  );
};

export default AppMenu;
