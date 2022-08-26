import { createStitches } from '@stitches/react';

const { styled, theme } = createStitches({
  theme: {
    colors: {
      red: '#DA291C',

      green: '#8FE2B0',

      black: '#000000',

      darkGrey: '#161A1E',

      grey: '#BBBCBC',

      lightGrey: '#E9EFEF',

      white: '#ffffff',

      jet: '#33332F'
    },

    fontSizes: {
      'body-1': '15px'
    },

    lineHeights: {
      'body-1': '18px'
    }
  },

  media: {
    xs: '(min-width: 375px)',

    sm: '(min-width: 480px)',

    md: '(min-width: 768px)',

    lg: '(min-width: 1172px)',

    xl: '(min-width: 1440px)'
  },

  utils: {
    mt: (payload: string) => ({
      marginTop: payload
    }),

    mb: (payload: string) => ({
      marginBottom: payload
    }),

    ml: (payload: string) => ({
      marginLeft: payload
    }),

    mr: (payload: string) => ({
      marginRight: payload
    }),

    pt: (payload: string) => ({
      paddingTop: payload
    }),

    pb: (payload: string) => ({
      paddingBottom: payload
    }),

    pl: (payload: string) => ({
      paddingLeft: payload
    }),

    pr: (payload: string) => ({
      paddingRight: payload
    }),

    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value
    }),

    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value
    }),

    my: (value: string) => ({
      marginTop: value,
      marginBottom: value
    }),

    size: (value: string) => ({
      width: value,
      height: value
    }),

    row: () => ({
      display: 'flex',
      alignItems: 'center'
    }),

    flexCol: () => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch'
    }),

    flexCenter: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),

    truncate: (_: boolean) => ({
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    })
  }
});

export { styled, theme };
