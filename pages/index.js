import { injectGlobal, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Hero from '../components/hero';
import Background from '../components/background';
import Card from '../components/card'

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
    black: '#1D3239',
    grey: '#FAFAFA',
    gradient: {
      green: '#74EBD5',
      purple: '#ACB6E5'
    }
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
      <div>
        <Hero></Hero>
        <Background>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Background>
      </div>
    </ThemeProvider>
  </div>
)
