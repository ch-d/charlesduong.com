import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import { ThemeProvider } from 'styled-components';
import Heading from '../components/heading';
import Hero from '../components/hero';
import Background from '../components/background';
import Card from '../components/card';
import List from '../components/list';
import Footer from '../components/footer';

baseStyles();

export default () => (
  <div>
    <Heading titleCase=""/>
    <ThemeProvider theme={colors}>
      <div>
        <Hero />
        <Background>
          <Card
            title = "Talent Sonar"
            sub1 = "Mobile Interaction Design"
            sub2 = "Design System"
            sub3 = "Marketing Design"
            img = "../static/talent-sonar/hero.png"
            url = "/talent-sonar"
            date = "Talent Acquisition"
            cta = "View Case Study 👉"
          />
          <Card
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange/hero.png"
            url = "/lawyer-exchange"
            date = "Legal Marketplace"
            cta = "View Case Study 👉"
          />
          {/* <a href="https://alliebot.com/">
            <Card
              title = "Allie Bot"
              sub1 = "Marketing Development"
              sub2 = "Design Sprints"
              img = "../static/alliebot/hero.png"
              url = "https://alliebot.com/"
              date = "2018"
            />
          </a> */}
          <Card
            title = "Savings Account"
            sub1 = "UI Design"
            sub2 = "User Research"
            img = "../static/koeo/hero.png"
            url = "#"
            date = "Financial Services"
            cta = "Case Study Coming Soon 👀"
          />
          {/* <Card
            title = "Luna Lights"
            sub1 = "User Interface Design"
            sub2 = "Data Visualization"
            img = "../static/luna-lights/hero.png"
            url = "/luna-lights"
            date = "Early 2016"
          />
          <Card
            title = "BallotReady"
            sub1 = "Marketing Design"
            sub2 = "Data Visualizations"
            img = "../static/ballot-ready/hero.png"
            url = "/ballot-ready"
            date = "Late 2016"
          /> */}
        </Background>
        <List />
        <Footer />
      </div>
    </ThemeProvider>
  </div>
)
