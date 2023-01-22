import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from '../../axiosConfig';
import { currentWeatherUrl, baseUrl } from '../constants/urls';
import { ICurrentWeather } from '../models/ICurrentWeather';

const currentWeatherService = createApi({
  reducerPath: 'currentWeather',
  baseQuery: axiosBaseQuery({ baseUrl }),
  // Just any baseline
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    current: builder.query<ICurrentWeather, string>({
      // TODO: Should filter to remove duplicates (when two stations is close to eachother)
      query: (q: string) => {
        const deconstructQuery = { lat: 60.41629645, lon: 11.255544249678406 };

        return {
          method: 'GET',
          url: `${currentWeatherUrl(
            deconstructQuery.lat,
            deconstructQuery.lon
          )}&appid=${import.meta.env.VITE_APP_OPEN_WEATHER_KEY}`,
        };
      },
    }),
  }),
});

export const { useCurrentQuery } = currentWeatherService;
export default currentWeatherService;
