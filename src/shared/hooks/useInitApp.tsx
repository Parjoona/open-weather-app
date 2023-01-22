import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { ICurrentWeather } from '../models/ICurrentWeather';
import useHandleLikes from './useHandleLikes';

const useInitApp = () => {
  const { addLike } = useHandleLikes();
  const [initiated, setIsInitiated] = useLocalStorage({
    key: 'weather-blast-init',
    defaultValue: false,
  });

  const defaultLikes = [
    {
      id: 2962486,
      coord: {
        lat: 53.3498,
        lon: -6.2603,
      },
    },
    {
      id: 6690593,
      coord: {
        lat: 51.5208,
        lon: -0.0856,
      },
    },
  ];

  useEffect(() => {
    if (!initiated) {
      defaultLikes.map((like) => addLike(like as ICurrentWeather));
      setIsInitiated(true);
    }
  }, []);
};

export default useInitApp;
