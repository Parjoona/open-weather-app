import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { ISearchResponse } from '../models/ISearch';
import { axiosBaseQuery } from '../../axiosConfig';
import { searchUrl } from '../constants/urls';

const searchService = createApi({
  reducerPath: 'search',
  baseQuery: axiosBaseQuery({ baseUrl: searchUrl }),
  // Just any baseline
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    search: builder.query<ISearchResponse[], string>({
      query: (q: string) => ({
        method: 'GET',
        url: `${q}&limit=10&appid=${import.meta.env.VITE_APP_OPEN_WEATHER_KEY}`,
      }),
    }),
  }),
});

export const { useLazySearchQuery } = searchService;
export default searchService;
