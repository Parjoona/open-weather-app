import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  HistoryRouterProps,
} from 'react-router-dom';
import { mockServer } from './mockServer';
import { createBrowserHistory } from 'history';

export const setupTests = () => {
  const { server } = mockServer();

  beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  interface RenderOptions {
    route: string;
    path?: string;
  }

  type HistoryPropType = HistoryRouterProps['history'];

  function renderWithProvider(
    children: React.ReactChild,
    { route, path }: RenderOptions = { route: '/', path: '' }
  ) {
    const history = createBrowserHistory({
      window,
    }) as unknown as HistoryPropType;
    history.push(route);

    return render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          {path ? (
            <Routes>
              <Route path={path}>{children}</Route>
            </Routes>
          ) : (
            children
          )}
        </HistoryRouter>
      </Provider>
    );
  }

  return {
    store,
    server,
    renderWithProvider,
  };
};
