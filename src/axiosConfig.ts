import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

import { baseUrl } from './shared/constants/urls';

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = baseUrl;
};

// Use with redux-toolkit-query (store)
export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
      responseType?: AxiosRequestConfig['responseType'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers, responseType }) => {
    try {
      // Makes use of the axiosDefaults and can be overwritten
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        responseType,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
