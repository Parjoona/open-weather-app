import { AppShell, Center } from '@mantine/core';
import { FC } from 'react';
import Navbar from './Navbar';

interface IProps {
  children: React.ReactNode;
}

const AppMenu: FC<IProps> = ({ children }) => {
  return (
    <AppShell
      padding='md'
      navbar={<Navbar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Center>{children}</Center>
    </AppShell>
  );
};

export default AppMenu;
