import { Link } from 'atomic-router-react';

import { $$settingsPage } from './settings.model';

const SettingsPage = () => (
  <div>
    <h1>Welcome To Settings</h1>

    <Link to={$$settingsPage.goToHomeRoute}>Go Home</Link>
  </div>
);

export { SettingsPage };
