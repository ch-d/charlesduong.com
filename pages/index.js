import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Hero from '../components/hero';
import Background from '../components/background';
import Card from '../components/card'

baseStyles();

export default () => (
  <div>
    <Head>
      <title>Charles Duong</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style>
        @import url('https://fonts.googleapis.com/css?family=Quicksand');
      </style>
    </Head>
    <ThemeProvider theme={colors}>
      <div>
        <Hero />
        <Background>
          <Card
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange/hero.png"
            url = "/lawyer-exchange"
          />
          <Card
            title = "BallotReady"
            sub1 = "Marketing Design"
            sub2 = "Data Visualizations"
            img = "../static/ballot-ready/hero.png"
            url = "/ballot-ready"
          />
          <Card
            title = "Luna Lights"
            sub1 = "User Interface Design"
            sub2 = "Data Visualization"
            img = "../static/luna-lights/hero.png"
            url = "/luna-lights"
          />
        </Background>
      </div>
    </ThemeProvider>
  </div>
)
