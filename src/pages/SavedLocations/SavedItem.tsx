import { ActionIcon, Skeleton } from '@mantine/core';
import { FC } from 'react';
import { useCurrentQuery } from '../../shared/store/currentWeather.service';
import { ICoord } from '../../shared/models/ICurrentWeather';
import { IconTrash } from '@tabler/icons';
import useHandleLikes from '../../shared/hooks/useHandleLikes';

interface IProps {
  coords: ICoord;
}

const SavedItem: FC<IProps> = ({ coords }) => {
  const { data, isLoading, isError } = useCurrentQuery(coords);
  const { removeLike } = useHandleLikes();

  const handleRemoveClick = () => {
    if (!data?.id) return;

    removeLike(data.id);
  };

  if (isLoading) {
    return <Skeleton h={25} w='100%' />;
  }

  if (isError || !data) return null;

  return (
    <tr key={data.name}>
      <td>{data.name}</td>
      <td>{data.coord.lat}</td>
      <td>{data.coord.lon}</td>
      <td>
        <ActionIcon onClick={handleRemoveClick}>
          <IconTrash size={16} />
        </ActionIcon>
      </td>
    </tr>
  );
};

export default SavedItem;
