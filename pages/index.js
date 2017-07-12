import { injectGlobal, ThemeProvider } from 'styled-components';
import Hero from '../components/hero';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               ubuntu,
               roboto, noto,
               'segoe ui', arial,
               sans-serif;
  }
`;

const theme = {
  colors: {
    black: 'black',
    blue: 'blue',
    grey: "grey"
  }
}

export default () => (
  <ThemeProvider theme={theme}>
    <Hero></Hero>
  </ThemeProvider>
)
