import { FC } from 'react';
import {
  ActionIcon,
  Card,
  Flex,
  Grid,
  Image,
  LoadingOverlay,
  Text,
  Title,
} from '@mantine/core';
import { IconHeart, IconHeartPlus } from '@tabler/icons';
import { useCurrentQuery } from '../../../shared/store/currentWeather.service';
import { useLocalStorage } from '@mantine/hooks';
import { ICoord } from '../../../shared/models/ICurrentWeather';
import useHandleLikes from '../../../shared/hooks/useHandleLikes';
import { useFetchDogQuery } from '../../../shared/store/getDogPicture.service';

interface IProps {
  /* Make the item a grid item */
  inFocus?: boolean;

  coords: ICoord;
}

const WeatherLocation: FC<IProps> = ({ inFocus, coords }) => {
  const { data, isLoading, isError } = useCurrentQuery(coords);
  const { data: dogPic } = useFetchDogQuery(String(coords.lat));

  const [value] = useLocalStorage({
    key: 'celsius-or-farenheit',
    defaultValue: 'celsius',
  });
  const { addLike, removeLike, isLiked } = useHandleLikes();

  const isCelsius = value === 'celsius';
  const hearted = isLiked(data?.id);

  const convertToCorrectDegrees = (deg?: number) => {
    if (!deg) return 0;

    if (isCelsius) return (deg - 273.15).toFixed(1); // celsius
    return ((9 / 5) * (deg - 273.15) + 32).toFixed(1); // farenheit
  };

  const handleLikeClick = () => {
    if (!data) return;

    if (hearted) {
      removeLike(data.id);
      return;
    }

    addLike(data);
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
            <Flex direction='column' mih={275} justify='space-between'>
              <Flex justify='space-between'>
                <Text>{data?.name || '-'}</Text>

                {data && (
                  <ActionIcon onClick={handleLikeClick}>
                    {hearted ? (
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
                    {isCelsius ? 'C' : 'F'}°
                  </Title>
                )}
                <Title order={2} align='center' size={16}>
                  {data?.weather[0].description || '-'}
                </Title>
              </Flex>

              <Flex justify='space-between' gap='xs' wrap='wrap'>
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
            </Flex>
          </Card.Section>

          {inFocus && (
            <Card.Section mt={{ sm: 'md' }} w={{ sm: '100%', md: '50%' }}>
              <Flex
                h='100%'
                mih={200}
                align='center'
                justify={{ sm: 'center', md: 'flex-end' }}
              >
                <Image
                  maw='50%'
                  fit='contain'
                  radius='md'
                  src={dogPic}
                  alt='Random dog image'
                />
              </Flex>
            </Card.Section>
          )}
        </Flex>
      </Card>
    </Grid.Col>
  );
};

export default WeatherLocation;
