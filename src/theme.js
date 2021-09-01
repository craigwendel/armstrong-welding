import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006778',
    },
    secondary: {
      main: '#D7A22A',
    },
    type: 'dark',
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
