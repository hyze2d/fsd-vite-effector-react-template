import '@/app/styles/index.scss';

import { createRoot } from 'react-dom/client';

import { App, Provider } from '@/app';

import { $$boot } from '@/processes/boot';

const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider>
    <App />
  </Provider>
);

$$boot.boot();
