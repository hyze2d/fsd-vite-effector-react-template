import { useUnit } from 'effector-react';

import { $$boot } from '@/processes/boot';

import { Pages } from '@/pages';

const App = () => {
  const ready = useUnit($$boot.$ready);

  switch (true) {
    case !ready:
      return <>Loading...</>;

    default:
      return <Pages />;
  }
};

export { App };

export { Provider } from './provider';
