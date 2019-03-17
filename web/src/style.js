import { colors, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#00979c',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffb300',
      contrastText: '#fff'
    }
  }
});

const header = {
  typography: {
    flex: 1,
    textAlign: 'center'
  }
};

const loader = {
  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  }
};

export { theme, header, loader };
