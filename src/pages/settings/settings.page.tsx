import { Link } from 'atomic-router-react';

import { routes } from '@/shared/routes';

const SettingsPage = () => (
  <div>
    <h1>Welcome To Settings</h1>

    <Link to={routes.home}>Go Home</Link>
  </div>
);

export { SettingsPage };
