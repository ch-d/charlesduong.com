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
          />
          <Card
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange/hero.png"
            url = "/lawyer-exchange"
          />
          <Card
            title = "Koeo Travel"
            sub1 = "Front-End Development"
            sub2 = "User Research"
            img = "../static/koeo/hero.png"
            url = "/koeo"
          />
          <Card
            title = "Luna Lights"
            sub1 = "User Interface Design"
            sub2 = "Data Visualization"
            img = "../static/luna-lights/hero.png"
            url = "/luna-lights"
          />
          <Card
            title = "BallotReady"
            sub1 = "Marketing Design"
            sub2 = "Data Visualizations"
            img = "../static/ballot-ready/hero.png"
            url = "/ballot-ready"
          />
        </Background>
      </div>
    </ThemeProvider>
  </div>
)
