import { createBrowserRouter } from 'react-router-dom';

import AdminLayout from '@/pages/clients/components/layout';
import HomePage from '@/pages/clients/home/page';

export const router = createBrowserRouter([
  {
    path: '',
    element: <AdminLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
