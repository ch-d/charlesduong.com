import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { space } from "styled-system";

// Layout Components
import Layout, {
  Divider,
  Description,
  Details,
  CategoryLabel,
  CategoryItem
} from "../components/case-study/layout";
import Textbox from "../components/case-study/textbox";
import Image from "../components/case-study/image";
import Imagegrid from "../components/case-study/imagegrid";

// Layout constants
import baseStyles from "../constants/baseStyles";
import colors from "../constants/colors";
import { H1, H2, Para, Caption } from "../constants/typography";

export default () => (
  <Layout
    title="Talent Sonar"
    date="Late 2017"
    disp1="none"
    titleCase="/talent-sonar"
    desc="Talent Sonar is a SaaS platform that addresses unconscious bias in the hiring process and provides a model for hiring teams to source and select the right fit for job requisitions."
  >
    <Flex wrap py={4}>
      <Description>
        <H1>ROC National Diners' Guide</H1>
        <Para>
          The Diners’ Guide showcases food establishments who take the “high
          road” to profitability, providing livable wages, paid time off, racial
          equity, an environment free of sexual harassment, and opportunities
          for advancement. The 2019 version of the Diners’ Guide allows you to
          create an account, check-in to restaurants, and earn consumer loyalty
          rewards.
        </Para>
        <CategoryLabel>Project Timeline</CategoryLabel>
        <CategoryItem>8 weeks</CategoryItem>
      </Description>
      <Flex>
        <Divider w="1" />
        <Details>
          <CategoryLabel>Company</CategoryLabel>
          <CategoryItem>Restaurant Opportunities Center United</CategoryItem>
          <CategoryLabel>Team Members</CategoryLabel>
          <CategoryItem>Cris Nelson, Product Manager</CategoryItem>
          <CategoryItem>Scott Nelson, Developer</CategoryItem>
          <CategoryLabel>Role</CategoryLabel>
          <CategoryItem>React Native (Expo SDK) Development</CategoryItem>
          <CategoryItem>iOS Mobile Design</CategoryItem>
          <CategoryItem>Android Mobile Design</CategoryItem>
        </Details>
      </Flex>
    </Flex>
    <Image img="../static/talent-sonar/hero.png" />
    <Flex wrap py={4}>
      <Description>
        <H1>BE MORE: Breaking Bias Lite</H1>
        <Para>
          BE MORE Lite is a gateway to breaking bias with emotional
          intelligence. It’s an interactive way to learn about unconscious bias
          and develop the skills to reduce it in your personal and professional
          life.
        </Para>
        <Para>
          Using micro-videos, playful games, and guided meditations, the app
          allows participants to learn and apply the science-based tools to
          break bias.
        </Para>
        <CategoryLabel>Project Timeline</CategoryLabel>
        <CategoryItem>12 weeks</CategoryItem>
      </Description>
      <Flex>
        <Divider w="1" />
        <Details>
          <CategoryLabel>Company</CategoryLabel>
          <CategoryItem>BE MORE</CategoryItem>
          <CategoryLabel>Team Members</CategoryLabel>
          <CategoryItem>Cris Nelson, Product Manager</CategoryItem>
          <CategoryItem>Scott Nelson, Developer</CategoryItem>
          <CategoryItem>Ethan Winn, User Researcher</CategoryItem>
          <CategoryItem>
            Taylor Sokolowski, Communications Designer
          </CategoryItem>
          <CategoryItem>Monica Gragg, Content Strategist</CategoryItem>
          <CategoryLabel>Role</CategoryLabel>
          <CategoryItem>React Native (Expo SDK) Development</CategoryItem>
          <CategoryItem>iOS Mobile Design</CategoryItem>
          <CategoryItem>Android Mobile Design</CategoryItem>
        </Details>
      </Flex>
    </Flex>
    <Image img="../static/talent-sonar/hero.png" />
  </Layout>
);
