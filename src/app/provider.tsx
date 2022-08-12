import { RouterProvider } from 'atomic-router-react';

import type { FC, PropsWithChildren } from 'react';

import { Theme } from '@shared/ui/theme';

import { router } from './router';

const Provider: FC<PropsWithChildren> = ({ children }) => (
  <RouterProvider router={router}>
    <Theme />

    {children}
  </RouterProvider>
);

export { Provider };
