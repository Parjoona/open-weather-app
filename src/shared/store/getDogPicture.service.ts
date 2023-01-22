import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from '../../axiosConfig';

const dogPictureService = createApi({
  reducerPath: 'dogs',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://dog.ceo/api/breeds/image/random',
  }),
  // Just any baseline
  endpoints: (builder) => ({
    fetchDog: builder.query<string, string>({
      // TODO: Should filter to remove duplicates (when two stations is close to eachother)
      query: () => ({
        method: 'GET',
        url: '',
      }),
      transformResponse: (response: { message: string; status: string }) =>
        response['message'],
    }),
  }),
});

export const { useFetchDogQuery } = dogPictureService;
export default dogPictureService;
