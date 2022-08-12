import { Route } from 'atomic-router-react';

import { routes } from '@shared/routes';

import { HomePage } from './home';

import { SettingsPage } from './settings';

const Pages = () => (
  <>
    <Route route={routes.home} view={HomePage} />

    <Route route={routes.settings} view={SettingsPage} />

    {/* Put <Route view={Component} route={route} /> there*/}

    {/* Put <Route view={Component} route={route} /> there*/}

    {/* Put <Route view={Component} route={route} /> there*/}

    {/* Put <Route view={Component} route={route} /> there*/}
  </>
);

export { Pages };
