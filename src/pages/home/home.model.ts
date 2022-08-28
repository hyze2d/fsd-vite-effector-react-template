import { createRoute } from 'atomic-router';

import { atom } from '@/shared/lib/misc';

const $$homePage = atom(() => {
  const route = createRoute();

  const goToSettingsRoute = createRoute();

  return {
    route,
    goToSettingsRoute
  };
});

export { $$homePage };
