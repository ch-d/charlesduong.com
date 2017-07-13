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
            img = "../static/lawyer-exchange.jpg"
            url = "/lawyer-exchange"
          />
          <Card info_num="2" img_num="1"
            title = "User Interface Design"
            sub1 = "Occasion"
            sub2 = "Luna Lights"
            img = "../static/user-interface.jpg"
            url = "/user-interface"
          />
          <Card
            title = "Marketing Design"
            sub1 = "BallotReady"
            sub2 = "Conduit Labs"
            sub3 = "Women Tech Founders"
            img = "../static/marketing.jpg"
            url = "/marketing"
          />
        </Background>
      </div>
    </ThemeProvider>
  </div>
)
