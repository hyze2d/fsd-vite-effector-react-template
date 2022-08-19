import { withDesign } from 'storybook-addon-designs';

import config from '../project.config.json';

import { Provider } from '../src/app/provider';

import '../src/app/styles/index.scss';

const parameters = {
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

    url: config.storybook.design.url
  }
};

const decorators = [
  withDesign,

  Story => (
    <Provider>
      <Story />
    </Provider>
  )
];

export { parameters, decorators };
