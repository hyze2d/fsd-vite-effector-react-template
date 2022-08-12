import { createEvent, restore } from 'effector';

import { theme } from './config';

import type { ThemeOptions } from './types';

const setTheme = createEvent<ThemeOptions>();

const $theme = restore(setTheme, theme.light);

export { $theme, setTheme };
