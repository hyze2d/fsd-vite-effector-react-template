import { Link } from 'atomic-router-react';

import { $$homePage } from './home.model';

const HomePage = () => (
  <div>
    <div>
      <h1>Welcome Home</h1>

      <Link to={$$homePage.goToSettingsRoute}>Go To Settings</Link>
    </div>
  </div>
);

export { HomePage };
