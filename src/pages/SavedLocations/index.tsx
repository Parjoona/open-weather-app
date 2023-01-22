import { Table, Title } from '@mantine/core';
import { FC } from 'react';
import useHandleLikes from '../../shared/hooks/useHandleLikes';
import SavedItem from './SavedItem';

const SavedLocations: FC = () => {
  const { likes } = useHandleLikes();

  return (
    <div>
      <Title order={2}>Saved locations</Title>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>lat pos</th>
            <th>lon pos</th>
            <th></th>
          </tr>
        </thead>

        {likes.map((coords) => (
          <SavedItem coords={coords} />
        ))}
      </Table>
    </div>
  );
};

export default SavedLocations;
