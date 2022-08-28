import { Route } from 'atomic-router-react';

import { $$homePage, HomePage } from './home';

import { $$settingsPage, SettingsPage } from './settings';

const Pages = () => (
  <>
    <Route route={$$homePage.route} view={HomePage} />

    <Route route={$$settingsPage.route} view={SettingsPage} />

    {/* Put <Route view={Component} route={route} /> there*/}

    {/* Put <Route view={Component} route={route} /> there*/}

    {/* Put <Route view={Component} route={route} /> there*/}

    {/* Put <Route view={Component} route={route} /> there*/}
  </>
);

export { Pages };
