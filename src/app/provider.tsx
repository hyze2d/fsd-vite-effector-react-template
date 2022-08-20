import { RouterProvider } from 'atomic-router-react';

import type { FC, PropsWithChildren } from 'react';

import { router } from './router';

const Provider: FC<PropsWithChildren> = ({ children }) => (
  <RouterProvider router={router}>{children}</RouterProvider>
);

export { Provider };
