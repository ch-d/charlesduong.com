import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import { ThemeProvider } from 'styled-components';
import Heading from '../components/heading';
import Hero from '../components/hero';
import Background from '../components/background';
import Card from '../components/card';

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
            sub1 = "User Interface Design"
            sub2 = "Design System"
            sub3 = "Marketing Design"
            img = "../static/talent-sonar/hero.png"
            url = "/talent-sonar"
            date = "Late 2017"
          />
          <Card
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange/hero.png"
            url = "/lawyer-exchange"
            date = "Late 2016 &ndash; Early 2017"
          />
          <Card
            title = "Koeo Travel"
            sub1 = "Front-End Development"
            sub2 = "User Research"
            img = "../static/koeo/hero.png"
            url = "/koeo"
            date = "Late 2017 &ndash;"
          />
          <Card
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
          />
        </Background>
      </div>
    </ThemeProvider>
  </div>
)
