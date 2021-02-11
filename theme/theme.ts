import { Theme } from '@theme-ui/css';

const theme: Theme = {
  colors: {
    text: '#f4f4f4',
    textSoft: '#9A9A9A',
    background: '#121212',
    backgroundTransparent: '#1212124D',
    primary: '#5779D9',
    primaryActive: '#6F92F8',
    primaryHover: '#415CA7',
    primaryFocus: '#3737F7',
    primaryDisabled: '#5779D980',
    primaryTransparent: '#5779d94D',
    primaryActiveTransparent: '#6F92F84D',
    secondary: '#F20544',
    secondaryHover: '#b50030',
    secondaryActive: '#fa406b',
    tertiary: '#808080',
    muted: '#e0e0e0',
    highlight: '#9f9f9f',
    accent: '#3f3f3f',
    textfield: '#292929',
    textfieldDark: '#12121226',
    label: '#9A9A9A',
    labelDark: '#29292999',
    modes: {
      light: {
        text: '#121212',
        textSoft: '#808080',
        background: '#f4f4f4',
      },
    },
    gray: ['#F4F4F4', '#9A9A9A', '#808080', '#676767', '#393939', '#292929', '#1F1F1F', '#121212'],
    panel: ['#F4F4F4', '#393939', '#121212'],
  },
  fonts: {
    body: "'Open Sans', Verdana, sans-serif",
    heading: 'Poppins, Verdana, sans-serif',
  },
  fontWeights: {
    regular: 300,
    semibold: 600,
  },
  lineHeights: {
    body: '1.5',
    heading: '1.125',
  },
  fontSizes: [12, 14, 18, 24, 32, 40],
  space: [0, 2, 4, 8, 12, 16, 24, 32, 48, 64],
  breakpoints: [600, 900, 1200, 1500].map((n) => `${n}px`),
  radii: {
    card: '18px',
    button: '16px',
    round: '50%',
  },
  shadows: {
    default: '0px 16px 20px #00000040',
    button: '3px 3px 8px #00000026',
  },
  sizes: {
    container: {
      fullscreen: '100%',
      wide: '1407px',
      default: '800px',
      stage: '600px',
      small: '400px',
      tiny: '332px',
    },
    page: {
      default: '1280px',
    },
    group: {
      width: '30px',
      height: '30px',
    },
    panel: {
      width: '150px',
      height: '200px',
    },
  },
  text: {
    h1: {
      fontSize: 5,
      fontFamily: 'heading',
      fontWeight: 'semibold',
    },
    h2: {
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'semibold',
    },
    h4: {
      fontSize: 2,
      fontFamily: 'heading',
      fontWeight: 'semibold',
    },
    h5: {
      fontSize: 1,
      fontFamily: 'heading',
      fontWeight: 'semibold',
    },
    h6: {
      fontSize: 1,
      fontFamily: 'body',
      fontWeight: 'semibold',
    },
    regular: {
      fontSize: 1,
      fontFamily: 'body',
      fontWeight: 'regular',
    },
    micro: {
      fontSize: 0,
      fontFamily: 'body',
      fontWeight: 'semibold',
    },
  },
  buttons: {
    primary: {
      fontFamily: 'heading',
      fontSize: 1,
      px: 4,
      py: 0,
      m: 3,
      border: '2px solid transparent',
      borderRadius: 'button',
      color: 'text',
      bg: 'primary',
      width: 'auto',
      height: '32px',
      boxShadow: 'button',
      ':hover': {
        bg: 'primaryHover',
        cursor: 'pointer',
      },
      ':active': {
        bg: 'primaryActive',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        outline: 0,
      },
      ':disabled': {
        bg: 'primaryDisabled',
        opacity: '0.5',
        boxShadow: 'none',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      border: '2px solid transparent',
      borderColor: 'primary',
      bg: 'transparent',
      ':hover': {
        borderColor: 'primaryHover',
        bg: '#1212124D',
        cursor: 'pointer',
      },
      ':active': {
        bg: 'primaryTransparent',
        borderColor: 'primaryActive',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        outline: 0,
      },
      ':disabled': {
        bg: 'primaryDisabled',
        opacity: '0.5',
        boxShadow: 'none',
      },
    },
    tertiary: {
      variant: 'buttons.primary',
      border: '2px solid transparent',
      borderColor: 'tertiary',
      bg: 'transparent',
      ':hover': {
        borderColor: 'gray.3',
        bg: 'backgroundTransparent',
        cursor: 'pointer',
      },
      ':active': {
        bg: 'primaryTransparent',
        borderColor: 'primary',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        outline: 0,
      },
      ':disabled': {
        borderColor: '#808080',
        opacity: '0.5',
        bg: 'transparent',
        boxShadow: 'none',
      },
    },
    danger: {
      variant: 'buttons.primary',
      border: '2px solid primary',
      bg: 'secondary',
      ':hover': {
        bg: 'secondaryHover',
        cursor: 'pointer',
      },
      ':active': {
        bg: 'secondaryActive',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        outline: 0,
      },
      ':disabled': {
        borderColor: 'secondary',
        boxShadow: 'none',
        bg: 'secondary',
        opacity: '0.5',
      },
    },
    functionPrimaryIcon: {
      variant: 'buttons.primary',
      p: 0,
      m: 0,
      borderRadius: '50%',
      height: '48px',
      width: '48px',
      ':focus': {
        borderColor: 'primaryFocus',
        borderWidth: '3px',
        borderStyle: 'solid',
        outline: 0,
      },
    },
    functionDangerIcon: {
      variant: 'buttons.danger',
      borderRadius: '50%',
      height: '48px',
      width: '48px',
      p: 0,
      m: 0,
      border: '3px solid transparent',
      ':focus': {
        borderColor: 'primaryFocus',
        borderWidth: '3px',
        borderStyle: 'solid',
        outline: 0,
      },
    },
    toggleOnPrimaryIcon: {
      variant: 'buttons.functionPrimaryIcon',
      ':disabled': {
        opacity: '0.5',
        bg: 'tertiary',
      },
    },
    toggleOfPrimaryIcon: {
      variant: 'buttons.tertiary',
      bg: 'tertiary',
      p: 0,
      m: 0,
      borderRadius: '50%',
      height: '48px',
      width: '48px',
      ':hover': {
        bg: 'gray.3',
      },
      ':active': {
        bg: 'gray.1',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        borderWidth: '3px',
        borderStyle: 'solid',
        outline: 0,
      },
      ':disabled': {
        opacity: '0.5',
        bg: 'tertiary',
      },
    },
    toggleOnTertiaryIcon: {
      variant: 'buttons.tertiary',
      bg: 'text',
      p: 0,
      m: 0,
      borderRadius: '50%',
      height: '48px',
      width: '48px',
      border: '3px solid transparent',
      ':hover': {
        bg: 'gray.1',
      },
      ':active': {
        bg: 'primaryActiveTransparent',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        borderWidth: '3px',
        borderStyle: 'solid',
        outline: 0,
      },
      ':disabled': {
        opacity: '0.5',
        bg: 'tertiary',
      },
    },
    close: {
      color: 'gray.1',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      border: 0,
      p: 0,
      bg: 'transparent',
      ':hover': {
        bg: 'gray.2',
        color: 'gray.3',
        cursor: 'pointer',
      },
      ':active': {
        bg: 'primaryActiveTransparent',
      },
      ':focus': {
        border: '1px solid transparent',
        borderColor: 'primaryFocus',
        outline: 0,
      },
    },
    icon: {
      variant: 'buttons.primary',
      border: '1px solid transparent',
      borderColor: 'transparent',
      borderRadius: '50%',
      color: 'primary',
      p: 0,
      width: '32px',
      height: '32px',
      bg: 'transparent',
      ':hover': {
        bg: 'gray.5',
        cursor: 'pointer',
      },
      ':active': {
        bg: 'primaryTransparent',
        borderColor: 'primary',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        outline: 0,
      },
      ':disabled': {
        border: '1px solid #80808080',
        boxShadow: 'none',
      },
    },
    tertiaryIcon: {
      variant: 'buttons.tertiary',
      border: '1px solid transparent',
      borderColor: 'transparent',
      borderRadius: '50%',
      color: 'tertiary',
      p: 0,
      width: '32px',
      height: '32px',
      bg: 'transparent',
      ':hover': {
        bg: 'gray.5',
        cursor: 'pointer',
      },
      ':active': {
        bg: 'primaryTransparent',
        borderColor: 'primary',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        outline: 0,
      },
      ':disabled': {
        border: '1px solid #80808080',
        boxShadow: 'none',
      },
    },
  },
  forms: {
    checkboxPrimary: {
      color: 'gray.3',
      width: '16px',
      height: '16px',
      outline: 0,
      borderRadius: 'radii.button',
      ':hover': {
        color: '#676767',
        bg: '#1212124D',
      },
      ':active': {
        bg: 'primaryActiveTransparent',
        color: 'primaryActive',
      },
      ':focus': {
        color: 'primaryFocus',
      },
      ':checked': {
        bg: 'primary',
        color: 'primary',
        ':hover': {
          bg: 'primaryHover',
        },
        ':focus': {
          color: 'primaryFocus',
        },
      },
      ':disabled': {
        opacity: '0.5',
      },
    },
    checkboxTertiary: {
      color: 'gray.3',
      width: '16px',
      height: '16px',
      outline: 0,
      borderRadius: 'radii.button',
      ':hover': {
        color: '#676767',
        bg: '#1212124D',
      },
      ':active': {
        bg: 'primaryActiveTransparent',
        color: 'primaryActive',
      },
      ':focus': {
        color: 'primaryFocus',
      },
      ':checked': {
        bg: 'text',
        color: 'text',
        ':hover': {
          bg: 'primaryHover',
        },
        ':focus': {
          color: 'primaryFocus',
        },
      },
      ':disabled': {
        opacity: '0.5',
      },
    },
    checkboxTertiaryDark: {
      color: 'gray.3',
      width: '16px',
      height: '16px',
      outline: 0,
      borderRadius: 'radii.button',
      ':hover': {
        color: '#676767',
        bg: '#1212124D',
      },
      ':active': {
        bg: 'primaryActiveTransparent',
        color: 'primaryActive',
      },
      ':focus': {
        color: 'primaryFocus',
      },
      ':checked': {
        bg: 'gray.3',
        color: 'gray.3',
        ':hover': {
          bg: 'primaryHover',
        },
        ':focus': {
          color: 'primaryFocus',
        },
      },
      ':disabled': {
        opacity: '0.5',
      },
    },
    radio: {
      width: '16px',
      height: '16px',
      color: 'gray.3',
      ':hover': {
        color: '#676767',
        bg: '#1212124D',
      },
      ':active': {
        bg: 'primaryActiveTransparent',
        color: 'primaryActive',
      },
      ':focus': {
        color: 'primaryFocus',
      },
      ':checked': {
        bg: 'primary',
        color: 'primary',
        ':hover': {
          bg: 'primaryHover',
        },
        ':focus': {
          color: 'primaryFocus',
        },
      },
      ':disabled': {
        opacity: '0.5',
      },
    },
    select: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      height: '64px',
      my: 5,
      p: 5,
      bg: 'gray.5',
      border: 0,
      borderBottom: '1px solid transparent',
      borderColor: 'text',
      borderRadius: 0,
      ':hover': {
        borderColor: 'primaryHover',
        bg: 'gray.6',
      },
      ':focus': {
        borderWidth: '3px',
        borderColor: 'primaryFocus',
        outline: 0,
      },
      'option:checked': {
        color: 'primary',
      },
      ':disabled': {
        bg: 'textfieldDark',
        color: '#f4f4f44D',
        borderColour: '#f4f4f44D',
        opacity: '0.5',
      },
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      color: 'text',
      textDecoration: 'none',
      borderBottom: '2px solid',
      borderColor: 'primary',
      ':hover': {
        borderColor: 'primaryHover',
        color: 'primaryHover',
      },
      ':active': {
        borderColor: 'primaryActive',
        color: 'primaryActive',
      },
      ':focus': {
        borderColor: 'primaryFocus',
        color: 'text',
      },
      ':disabled': {
        opacity: '0.5',
      },
    },
  },
  styles: {
    a: {
      textDecoration: 'none',
    },
  },
};

export default theme;
