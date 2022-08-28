import { createRoute } from 'atomic-router';

import { atom } from '@/shared/lib/misc';

const $$settingsPage = atom(() => {
  const route = createRoute();

  const goToHomeRoute = createRoute();

  return {
    route,

    goToHomeRoute
  };
});

export { $$settingsPage };
