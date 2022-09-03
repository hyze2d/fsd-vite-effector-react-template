import { purpleDark } from '@radix-ui/colors';

import { styled } from '../../stitches';

const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  lineHeight: 1,
  fontWeight: 500,
  outline: 'none',
  transition: '0.25s',
  cursor: 'pointer',
  border: '1px solid transparent',

  '&:disabled': {
    cursor: 'not-allowed'
  },

  variants: {
    pending: {
      true: {
        cursor: 'progress'
      }
    },

    size: {
      sm: {
        fontSize: 12,
        padding: '6px 10px'
      },

      md: {
        fontSize: 15,
        padding: '10px 12px'
      },

      lg: {
        fontSize: 18,
        padding: '12px 16px'
      }
    },

    variant: {
      fill: {},

      outline: {},

      text: {},

      link: {}
    },

    color: {
      violet: {},
      white: {}
    }
  },

  compoundVariants: [
    {
      variant: 'fill',

      color: 'violet',

      css: {
        color: 'white',
        background: purpleDark.purple9,
        borderColor: purpleDark.purple9,

        '&:hover': {
          backgroundImage: 'none',
          background: purpleDark.purple11,
          borderColor: purpleDark.purple11
        }
      }
    },

    {
      variant: 'outline',

      color: 'violet',

      css: {
        color: 'black',
        background: 'white',
        borderColor: purpleDark.purple9,

        '&:hover': {
          background: purpleDark.purple12
        }
      }
    }
  ],

  defaultVariants: {
    size: 'md',
    color: 'violet',
    variant: 'fill',
    pending: false
  }
});

export { Button };
