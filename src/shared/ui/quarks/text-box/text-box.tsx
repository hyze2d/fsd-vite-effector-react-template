import { blackA, violetDark } from '@radix-ui/colors';

import { styled } from '../../stitches';

import { Card } from '../layout';

const TextBox = styled('input', {
  width: '100%',
  borderRadius: 4,
  height: 35,
  px: '12px',
  fontSize: 15,
  lineHeight: 1,
  color: 'white',
  backgroundColor: blackA.blackA5,
  border: `1px solid ${blackA.blackA5}`,
  transition: '.25s',
  outline: 'none',

  '&:focus': {
    borderColor: violetDark.violet11
  },

  [`${Card} &`]: {
    color: blackA.blackA12
  }
});

export { TextBox };
