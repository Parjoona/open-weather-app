import { Grid } from '@mantine/core';
import { FC } from 'react';
import useHandleLikes from '../../../shared/hooks/useHandleLikes';
import { ISearchResponse } from 'shared/models/ISearch';
import WeatherLocation from './WeatherLocation';

interface IProps {
  searchResult: ISearchResponse | null;
}

const DashboardItems: FC<IProps> = ({ searchResult }) => {
  const { likes } = useHandleLikes();

  return (
    <Grid grow columns={3} mt='md'>
      {/* Show search result with a big picture */}
      {searchResult && (
        <WeatherLocation
          inFocus
          isSearch
          coords={{ lat: searchResult.lat, lon: searchResult.lon }}
        />
      )}

      {likes.map((coords, index) => (
        <WeatherLocation inFocus={index === 0} coords={coords} />
      ))}
    </Grid>
  );
};

export default DashboardItems;
