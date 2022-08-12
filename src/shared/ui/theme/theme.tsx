import { createView } from '@shared/lib/view';

import { $theme } from './model';

const Theme = createView()
  .units({
    styles: $theme.map(theme =>
      Object.entries(theme)
        .map(([key, value]) => `--theme-${key}: ${value};`)

        .join('\n')
    )
  })

  .view(({ styles }) => <style>{`:root  { ${styles} }`}</style>);

export { Theme };
