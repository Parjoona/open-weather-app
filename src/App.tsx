import { FC } from 'react';
import AppMenu from './components/AppMenu';
import { Title } from '@mantine/core';

const Root: FC = () => {
  return (
    <AppMenu>
      <Title>Welcome</Title>
    </AppMenu>
  );
};

export default Root;
