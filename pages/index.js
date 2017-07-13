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
  * {
    transition: all .2s ease-in-out;
  }
`;

const theme = {
  colors: {
    black: '#1D3239',
    grey: '#FAFAFA',
    blue: '#B6CFF0',
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
        <Hero />
        <Background>
          <Card
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange.jpg"
          />
          <Card info_num="2" img_num="1"
            title = "User Interface Design"
            sub1 = "Occasion"
            sub2 = "Luna Lights"
            img = "../static/user-interface.jpg"
          />
          <Card
            title = "Marketing Design"
            sub1 = "BallotReady"
            sub2 = "Conduit Labs"
            sub3 = "Women Tech Founders"
            img = "../static/marketing.jpg"
          />
        </Background>
      </div>
    </ThemeProvider>
  </div>
)
