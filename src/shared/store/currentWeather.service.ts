import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from '../../axiosConfig';
import { currentWeatherUrl, baseUrl } from '../constants/urls';
import { ICurrentWeather, ICoord } from '../models/ICurrentWeather';

const currentWeatherService = createApi({
  reducerPath: 'currentWeather',
  baseQuery: axiosBaseQuery({ baseUrl }),
  // Just any baseline
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    current: builder.query<ICurrentWeather, ICoord>({
      // TODO: Should filter to remove duplicates (when two stations is close to eachother)
      query: ({ lat, lon }: ICoord) => ({
        method: 'GET',
        url: `${currentWeatherUrl(lat, lon)}&appid=${
          import.meta.env.VITE_APP_OPEN_WEATHER_KEY
        }`,
      }),
    }),
  }),
});

export const { useCurrentQuery } = currentWeatherService;
export default currentWeatherService;
