import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { App } from './components/app/app';

import { MainPageLazy } from '@/pages/main/main.lazy';
import { AboutPageLazy } from '@/pages/about/about.lazy';
import { ShopPageLazy } from '@/pages/shop/shop.lazy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: `/`,
        element: (
          <Suspense fallback='Loading...'>
            <MainPageLazy />
          </Suspense>
        ),
      },
      {
        path: `/about`,
        element: (
          <Suspense fallback='Loading...'>
            <AboutPageLazy />
          </Suspense>
        ),
      },
      {
        path: `/shop`,
        element: (
          <Suspense fallback='Loading...'>
            <ShopPageLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById(`root`));

root.render(<RouterProvider router={router} />);
