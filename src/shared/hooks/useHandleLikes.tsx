import { useLocalStorage } from '@mantine/hooks';
import { ICoord, ICurrentWeather } from '../models/ICurrentWeather';

const useHandleLikes = () => {
  const [likes, setLikes] = useLocalStorage({
    key: 'weather-blast-likes',
    defaultValue: {},
  });

  const addLike = (model: ICurrentWeather) => {
    setLikes((prev) => ({
      ...prev,
      [model.id]: {
        lat: model.coord.lat,
        lon: model.coord.lon,
      } as ICoord,
    }));
  };

  const removeLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: null,
    }));
  };

  const isLiked = (id?: number) => {
    if (!id) return false;
    const liked = Object.entries(likes).find(
      ([key, value]) => Number(key) === id && value !== null
    );

    return Boolean(liked?.[0] && liked?.[1] !== null);
  };

  // Need to clear out the null values from removing etc.
  const likesAsList = Object.values(likes).filter((i) => i) as ICoord[];

  return {
    likes: likesAsList,
    isLiked,
    addLike,
    removeLike,
  };
};

export default useHandleLikes;
