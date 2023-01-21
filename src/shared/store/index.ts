import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseUrl } from '../../shared/constants/urls';
import { axiosBaseQuery } from 'axiosConfig';

export const baseApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: axiosBaseQuery({ baseUrl }),
  // Just any baseline
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// for refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
