import { styled } from '../../stitches';

const Text = styled('div', {
  variants: {
    variant: {
      body1: {
        fontSize: '15px',
        lineHeight: '21px'
      },

      h1: {
        fontSize: '28px',
        lineHeight: '36px'
      }
    }
  }
});

export { Text };
