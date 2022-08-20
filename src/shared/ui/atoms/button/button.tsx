import type { ComponentProps } from 'react';

import { styled } from '../../stitches';

const Container = styled('button', {
  padding: '12px',
  background: '$white',
  transition: '0.25s',

  '@lg': {
    padding: '16px'
  },

  '&:hover': {
    background: '$red'
  }
});

const Button = (props: ComponentProps<typeof Container>) => (
  <Container {...props} />
);

export { Button };
