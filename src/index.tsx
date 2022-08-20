import '@/app/styles/index.scss';

import { createRoot } from 'react-dom/client';

import { App, Provider } from '@/app';

import { $$boot } from '@/processes/boot';

$$boot.boot();

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
);
