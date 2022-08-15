import { Link } from 'atomic-router-react';

import { routes } from '@/shared/routes';

const HomePage = () => (
  <div>
    <div>
      <h1>Welcome Home</h1>

      <Link to={routes.settings}>Go To Settings</Link>
    </div>
  </div>
);

export { HomePage };
