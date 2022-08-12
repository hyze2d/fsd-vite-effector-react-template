import { withDesign } from 'storybook-addon-designs';

import { Provider } from '../src/app/provider';

import '../src/app/styles/index.scss';

const DESIGN_SYSTEM_URL = `https://projects.invisionapp.com/d/main?origin=v7#/console/19861718/465507084/preview?scrollOffset=0`;

export const parameters = {
  actions: { 
    argTypesRegex: '^on[A-Z].*'
   },

  controls: {
    matchers: {
      color: /(background|color)$/i,

      date: /Date$/
    }
  },

  design: {
    type: 'invision',

    url: DESIGN_SYSTEM_URL
  }
};

export const decorators = [
  withDesign,
  
  Story => (
    <Provider>
      <Story />
    </Provider>
  )
];
