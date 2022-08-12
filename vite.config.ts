/* eslint-disable */
import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

import config from './vite.base.config';

export default defineConfig(
  mergeConfig(config, {
    plugins: [react()]
  })
);
