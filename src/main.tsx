import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import { setAxiosDefaults } from './axiosConfig';
import { store } from './shared/store';
import routes from './routes';

setAxiosDefaults();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: 'dark' }}
    >
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
