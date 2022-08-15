import { createHistoryRouter } from 'atomic-router';

import { createBrowserHistory } from 'history';

import { routes } from '@/shared/routes';

const history = createBrowserHistory();

const router = createHistoryRouter({
  routes: [
    {
      path: '/',

      route: routes.home
    },

    {
      path: '/settings',

      route: routes.settings
    }
  ]
});

router.setHistory(history);

export { router };
