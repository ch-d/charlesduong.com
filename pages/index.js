import { injectGlobal, ThemeProvider } from 'styled-components';
import Head from 'next/head';
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
  <div>
    <Head>
      <title>Charles Duong</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <ThemeProvider theme={theme}>
      <Hero></Hero>
    </ThemeProvider>
  </div>
)
