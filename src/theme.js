import { createMuiTheme } from '@material-ui/core/styles';

import lime from '@material-ui/core/colors/lime';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4d35e',
    },
    secondary: {
      main: lime[200],
    },
    type: 'light',
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontWeight: 800,
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4d35e',
    },
    secondary: {
      main: lime[200],
    },
    type: 'light',
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontWeight: 800,
    },
  },
});
