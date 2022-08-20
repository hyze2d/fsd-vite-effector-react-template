import { Link } from 'atomic-router-react';

import { createEvent, restore } from 'effector';

import { useStore } from 'effector-react';

import { routes } from '@/shared/routes';

import { Button } from '@/shared/ui/atoms/button';

import { Checkbox } from '@/shared/ui/atoms/checkbox';

import { styled } from '@/shared/ui/stitches';

const changed = createEvent<boolean>();

const $checked = restore(changed, false);

const Kek = styled('div', {
  color: 'red',
  background: 'green'
});

const SuperKek = styled(Kek, {
  color: 'white',

  [`${Kek} &`]: {
    fontSize: '18px'
  }
});

const HomePage = () => (
  <div>
    <div>
      <h1>Welcome Home</h1>

      <Kek>dsad</Kek>

      <Kek>
        <SuperKek>dsad</SuperKek>
      </Kek>

      <SuperKek>dsad</SuperKek>

      <Button>BUTTON</Button>

      <Checkbox value={useStore($checked)} onChange={value => changed(value)}>
        Hello!
      </Checkbox>

      <Link to={routes.settings}>Go To Settings</Link>
    </div>
  </div>
);

export { HomePage };
