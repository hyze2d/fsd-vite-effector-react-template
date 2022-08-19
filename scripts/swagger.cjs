const fs = require('fs');

const path = require('path');

const config = require('../project.config.json');

const { generateApi } = require('swagger-typescript-api');

const dir = path.resolve(process.cwd(), config.api.dir);

const pathToTemplate = path.resolve(
  process.cwd(),

  'node_modules',

  'effector-http-api/codegen-template'
);

for (const source of config.api.source) {
  generateApi({
    name: 'sdk.ts',

    output: dir + '/' + source.name,

    url: source.url,

    httpClientType: 'axios',

    generateClient: true,

    templates: pathToTemplate
  }).then(() => {
    fs.writeFileSync(
      path.join(dir, source.name, '/index.ts'),

      `export * from './sdk';\n`
    );

    if (!fs.existsSync(path.join(dir, source.name, '/config.ts'))) {
      fs.writeFileSync(path.join(dir, source.name, '/config.ts'), `import axios from 'axios';

import { createHttp } from 'effector-http-api';

const instance = axios.create();

const http = createHttp(instance);

export { http };
`
      );
    }
  });
}
