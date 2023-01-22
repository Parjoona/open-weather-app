import { FC } from 'react';
import {
  ActionIcon,
  Card,
  Flex,
  Grid,
  LoadingOverlay,
  Text,
  Title,
} from '@mantine/core';
import { IconHeart, IconHeartPlus } from '@tabler/icons';
import { useCurrentQuery } from '../../../shared/store/currentWeather.service';

interface IProps {
  /* Make the item a grid item */
  inFocus?: boolean;
  /* Make the item a favorite item */
  isFavorite?: boolean;
}

const WeatherLocation: FC<IProps> = ({ inFocus, isFavorite }) => {
  const { data, isLoading } = useCurrentQuery('hello');

  const convertCelvinToCelsius = (deg?: number) => {
    if (!deg) return 0;

    return (deg - 273.15).toFixed(1);
  };

  // TODO implement this.
  const convertCelvinToFarenheit = (deg: number) => {
    if (!deg) return 0;

    return ((deg * 9) / 5 + 32).toFixed(1);
  };

  return (
    <Grid.Col span={inFocus ? 3 : 1}>
      <Card shadow='sm' p='lg' radius='md' withBorder>
        <LoadingOverlay visible={isLoading} overlayBlur={3} />
        <Flex
          w='100%'
          align='center'
          justify='space-around'
          direction={{ sm: 'column', md: 'row' }}
        >
          <Card.Section w={{ sm: '100%', md: inFocus ? '50%' : '100%' }}>
            <Flex justify='space-between'>
              <Text>{data?.name || '-'}</Text>

              {data && (
                <ActionIcon>
                  {isFavorite ? (
                    <IconHeart color='red' opacity={0.6} size={24} />
                  ) : (
                    <IconHeartPlus opacity={0.6} size={24} />
                  )}
                </ActionIcon>
              )}
            </Flex>

            <Flex direction='column' align='center' my={36}>
              <Title order={1} align='center'>
                {convertCelvinToCelsius(data?.main.temp) || 0} C
              </Title>
              <Title order={2} align='center' size={16}>
                {data?.weather[0].description || '-'}
              </Title>
            </Flex>

            <Flex justify='space-between'>
              <Text size={12}>{data?.wind.speed} speed</Text>
              <Text size={12}>{data?.wind.gust} gust</Text>
              <Text size={12}>{data?.main.humidity}% humidity</Text>
            </Flex>
          </Card.Section>

          {inFocus && (
            <Card.Section w={{ sm: '100%', md: '50%' }}>
              <Flex h='100%' mih={200} align='center' justify='center'>
                Insert graph/nice picture here
              </Flex>
            </Card.Section>
          )}
        </Flex>
      </Card>
    </Grid.Col>
  );
};

export default WeatherLocation;
