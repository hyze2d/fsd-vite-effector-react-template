import { createHistoryRouter } from 'atomic-router';

import { createBrowserHistory } from 'history';

import { $$homePage } from '@/pages/home';

import { $$settingsPage } from '@/pages/settings';

const history = createBrowserHistory();

const router = createHistoryRouter({
  routes: [
    {
      path: '/',

      route: [$$homePage.route, $$settingsPage.goToHomeRoute]
    },

    {
      path: '/settings',

      route: [$$settingsPage.route, $$homePage.goToSettingsRoute]
    }
  ]
});

router.setHistory(history);

export { router };
