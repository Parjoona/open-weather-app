import { Grid } from '@mantine/core';
import { FC } from 'react';
import { ISearchResponse } from 'shared/models/ISearch';
import WeatherLocation from './WeatherLocation';

interface IProps {
  searchResult: ISearchResponse | null;
}

const DashboardItems: FC<IProps> = ({ searchResult }) => {
  const convertLonLatString = (q: string) => {
    const converted = new URLSearchParams(q);

    return {
      lat: converted.get('lat'),
      lon: converted.get('lon'),
    };
  };

  console.log(convertLonLatString('lon=21314134&lat=354135135'));

  const coords = { lat: 60.41629645, lon: 11.255544249678406 };

  return (
    <Grid grow columns={3} mt='md'>
      {searchResult && (
        <WeatherLocation
          inFocus
          coords={{ lat: searchResult.lat, lon: searchResult.lon }}
        />
      )}
      <WeatherLocation inFocus coords={coords} />
      <WeatherLocation coords={coords} />
      <WeatherLocation isFavorite coords={coords} />
      <WeatherLocation coords={coords} />
    </Grid>
  );
};

export default DashboardItems;
