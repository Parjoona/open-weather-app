import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseUrl } from '../../shared/constants/urls';
import { axiosBaseQuery } from '../../axiosConfig';
import searchService from './search.service';
import currentWeatherService from './currentWeather.service';
import dogPictureService from './getDogPicture.service';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl }),
  // Just any baseline
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [searchService.reducerPath]: searchService.reducer,
    [currentWeatherService.reducerPath]: currentWeatherService.reducer,
    [dogPictureService.reducerPath]: dogPictureService.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    baseApi.middleware,
    currentWeatherService.middleware,
    searchService.middleware,
    dogPictureService.middleware,
  ],
});

// for refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
