import { createBrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import SavedLocations from './pages/SavedLocations';
import Settings from './pages/Settings';

import NotFound from './components/NotFound';
import AppMenu from './components/AppMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppMenu />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/saved',
        element: <SavedLocations />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
