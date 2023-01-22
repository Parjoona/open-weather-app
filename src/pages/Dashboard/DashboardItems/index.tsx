import { Grid } from '@mantine/core';
import { FC } from 'react';
import useHandleLikes from '../../../shared/hooks/useHandleLikes';
import { ISearchResponse } from 'shared/models/ISearch';
import WeatherLocation from './WeatherLocation';
import { useMediaQuery } from '@mantine/hooks';

interface IProps {
  searchResult: ISearchResponse | null;
}

const DashboardItems: FC<IProps> = ({ searchResult }) => {
  const { likes } = useHandleLikes();
  const isXS = useMediaQuery('(max-width: 769px)');
  const isMD = useMediaQuery('(max-width: 1024px)');

  const columns = isXS ? 1 : isMD ? 2 : 3;

  return (
    <Grid grow columns={columns} mt='md'>
      {/* Show search result with a big picture */}
      {searchResult && (
        <WeatherLocation
          inFocus
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
