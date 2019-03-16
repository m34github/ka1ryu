import { colors, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: colors.cyan['500'],
      contrastText: '#fff'
    },
    secondary: {
      main: colors.pink['500'],
      contrastText: '#fff'
    }
  }
});

export { theme };
