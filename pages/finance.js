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

const Framer = styled.iframe`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  border: 0;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  height: 36rem;
  @media (max-width: 40rem) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    height: 48rem;
  }
  @media (max-width: 30rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
  max-width: 100%;
  width: 100%;
  margin-bottom: 2rem;
`;

const GridImage = styled.div`
  border-radius: 0.25rem;
  background-image: ${props => props.image};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  grid-column: ${props => props.column_l};
  grid-row: ${props => props.row_l};
  @media (max-width: 40rem) {
    grid-column: ${props => props.column_m};
    grid-row: ${props => props.row_m};
  }
  @media (max-width: 30rem) {
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
  }
`;

const Cap = Caption.extend`
  @media (max-width: 40rem) {
    display: none;
  }
  ${space}
`;

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
        <H1>Forbes Fintech 50 Company</H1>
        <Para>
          Talent Sonar provides a model for hiring teams to source and select
          the right fit for job requisitions. The platform facilitates
          identity-blind resume reviews to reduce bias when scanning resumes and
          structured interviews to reduce the tendency to screen candidates on{" "}
          <a href="https://www.linkedin.com/pulse/theory-hiring-part-1-lou-adler/">
            short-term positive
          </a>{" "}
          criteria. Overall, the application promotes quantifiable
          decision-making to find a long-term fit between companies and
          candidates.
        </Para>
        <Para>
          I worked with various stakeholders: product managers, developers, and
          marketing/sales team. We worked together to ship features on their
          mobile app, web platform, and marketing/sales collateral.
        </Para>
      </Description>
      <Flex>
        <Divider w="1" />
        <Details>
          <CategoryLabel>Company</CategoryLabel>
          <CategoryItem>Forbes Fintech 50 Company</CategoryItem>
          <CategoryLabel>Team Members</CategoryLabel>
          <CategoryItem>Catrina Patton, Product Manager</CategoryItem>
          <CategoryItem>Paige Panter, Marketing Manager</CategoryItem>
          <CategoryItem>Liz Kofman, Sociologist</CategoryItem>
          <CategoryItem>Daniel Kim, JS Web Developer</CategoryItem>
          <CategoryItem>Reggie, Swift Mobile Developer</CategoryItem>
          <CategoryLabel>Projects</CategoryLabel>
          <CategoryItem>Mobile Interaction Design</CategoryItem>
          <CategoryItem>Web Interaction Design</CategoryItem>
          <CategoryItem>Marketing / Sales Assets</CategoryItem>
        </Details>
      </Flex>
    </Flex>
    <Image img="../static/talent-sonar/hero.png" />
  </Layout>
);
