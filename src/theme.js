import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4d35e',
    },
    secondary: {
      main: '#FBEF73',
    },
    type: 'light',
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontWeight: 800,
    },
    body1: {
      fontWeight: 300,
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4d35e',
    },
    secondary: {
      main: '#FBEF73',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'Open Sans',

    h1: {
      fontWeight: 800,
    },
    body1: {
      fontWeight: 300,
    },
  },
});
