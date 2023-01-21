import { Button, Center, Flex, Text, Title } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => (
  <Center w='100%' h='100vh'>
    <Flex align='center' justify='center' direction='column'>
      <Title>404</Title>
      <Title order={2}>Page was not found</Title>

      <Text mt='xs'>Please go back to the main page:</Text>
      <Button m='xs' component={Link} to='/'>
        Here
      </Button>
    </Flex>
  </Center>
);

export default NotFound;
