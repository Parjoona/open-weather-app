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
import { useLocalStorage } from '@mantine/hooks';
import { ICoord } from '../../../shared/models/ICurrentWeather';

interface IProps {
  /* Make the item a grid item */
  inFocus?: boolean;
  /* Make the item a favorite item */
  isFavorite?: boolean;

  coords: ICoord;
}

const WeatherLocation: FC<IProps> = ({ inFocus, isFavorite, coords }) => {
  const { data, isLoading, isError } = useCurrentQuery(coords);
  const [value] = useLocalStorage({
    key: 'celsius-or-farenheit',
    defaultValue: 'celsius',
  });

  const isCelsius = value === 'celsius';

  const convertToCorrectDegrees = (deg?: number) => {
    if (!deg) return 0;

    if (isCelsius) return (deg - 273.15).toFixed(1); // celsius
    return ((9 / 5) * (deg - 273.15) + 32).toFixed(1); // farenheit
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
              {isError ? (
                <Title color='red' opacity={0.6} order={1} align='center'>
                  Something went wrong
                </Title>
              ) : (
                <Title order={1} align='center'>
                  {convertToCorrectDegrees(data?.main.temp)}{' '}
                  {isCelsius ? 'C' : 'F'}
                </Title>
              )}
              <Title order={2} align='center' size={16}>
                {data?.weather[0].description || '-'}
              </Title>
            </Flex>

            <Flex justify='space-between'>
              {data?.wind.speed && (
                <Text opacity={0.8} size={12}>
                  {data.wind.speed} speed
                </Text>
              )}
              {data?.wind.gust && (
                <Text opacity={0.8} size={12}>
                  {data.wind.gust} gust
                </Text>
              )}
              {data?.main.humidity && (
                <Text opacity={0.8} size={12}>
                  {data.main.humidity}% humidity
                </Text>
              )}
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
