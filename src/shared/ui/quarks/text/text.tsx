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
    },

    thin: {
      true: {
        fontWeight: 300
      }
    },

    normal: {
      true: {
        fontWeight: 400
      }
    },

    medium: {
      true: {
        fontWeight: 500
      }
    },

    semiBold: {
      true: {
        fontWeight: 600
      }
    },

    bold: {
      true: {
        fontWeight: 700
      }
    },

    italic: {
      true: {
        fontStyle: 'italic'
      }
    }
  }
});

export { Text };
