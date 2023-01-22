import { Grid } from '@mantine/core';
import { FC } from 'react';
import WeatherLocation from './WeatherLocation';

const DashboardItems: FC = () => {
  return (
    <Grid grow columns={3} mt='md'>
      <WeatherLocation inFocus />
      <WeatherLocation />
      <WeatherLocation isFavorite />
      <WeatherLocation />
    </Grid>
  );
};

export default DashboardItems;
