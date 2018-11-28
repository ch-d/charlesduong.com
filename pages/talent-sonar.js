import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { space } from 'styled-system';

// Layout Components
import Layout, { Divider, Description, Details, CategoryLabel, CategoryItem } from '../components/case-study/layout';
import Textbox from '../components/case-study/textbox';
import Image from '../components/case-study/image';
import Imagegrid from '../components/case-study/imagegrid';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para, Caption } from '../constants/typography';

const Framer = styled.iframe`
  max-width:100%;
  width:100%;
  height: 100vh;
  border:0;
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
  };
  @media (max-width: 30rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  };
  max-width: 100%;
  width: 100%;
  margin-bottom: 2rem;
`

const GridImage = styled.div `
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
  };
  @media (max-width: 30rem) {
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
  };
`

const Cap = Caption.extend `
@media (max-width: 40rem) {
  display: none
}
${space}
`

export default () => (
  <Layout
    title='Talent Sonar'
    date='Late 2017'
    disp1="none"
    titleCase="/talent-sonar"
    desc='Talent Sonar is a SaaS platform that addresses unconscious bias in the hiring process and provides a model for hiring teams to source and select the right fit for job requisitions.'
  >

    <Flex wrap py={4}>
      <Description>
        <H1>Addressing unconscious bias in the hiring process</H1>
        <Para>Talent Sonar provides a model for hiring teams to source and select the right fit for job requisitions. The platform facilitates identity-blind resume reviews to reduce bias when scanning resumes and structured interviews to reduce the tendency to screen candidates on   <a href="https://www.linkedin.com/pulse/theory-hiring-part-1-lou-adler/">short-term positive</a> criteria. Overall, the application promotes quantifiable decision-making to find a long-term fit between companies and candidates.</Para>
        <Para>I worked with various stakeholders: product managers, developers, and marketing/sales team. We worked together to ship features on their mobile app, web platform, and marketing/sales collateral.</Para>
      </Description>
      <Flex>
        <Divider w="1" />
        <Details>
          <CategoryLabel>Company</CategoryLabel>
            <CategoryItem>Talent Sonar</CategoryItem>
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
    <Image img = "../static/talent-sonar/hero.png"/>

    <Textbox>
      <H2>Mobile Resume Review</H2>
      <Para>When I first came onboard, the mobile app was in its early stages and only gave interviewers the ability to reference, take notes during, and score interviews. A missing function recruiters and hiring managers sought was the ability to review resumes on the app. The resume redaction flow for web did not involve too many steps, so we decided to explore what this feature would look like in a mobile context.</Para>
    </Textbox>

    <Image img = "../static/talent-sonar/001.png" cap="Mobile Interview Planning Flow (1 of 2)"/>

    <Textbox>
      <Para>Since resumes are commonly used in context of 8.5 x 11 piece of paper, we knew it would be a design challenge to fit everything into the context of a mobile device. We explored ideas like tinder-like card swiping, floating action buttons, and counting taps. We landed on a prototype with a toolbar that slid halfway over a resume so users could have both the survey and resume to reference when reviewing.</Para>
      <Para>After we tested our prototype, we found users needed proper affordances and swiping or tapping interactions confused them. Ultimately, we decided the value proposition was not strong enough, especially with the amount of engineering needed to be implemented. We icebox-ed the feature and would take a look at it again another date.</Para>
    </Textbox>

    <Framer src="https://framer.cloud/gRnDc/" frameborder="0"/>
    <Cap mt={[1,0]} mb={3}>*Hold the alt key while moving your cursor—to pinch in prototype.</Cap>

    <Textbox>
      <H2>Mobile Interview Planning</H2>
      <Para>A more important flow we wanted to push out was the interview planning flow. Through research, Talent Sonar found most interviewer and hiring manager personas often felt intimidated by the hiring process. They had very few interview experiences (at least from the hiring side) and mostly took advice from past experiences being interviewed. To help, we wanted to provide job templates (with pre-filled job criteria). From there, we could provide a structured path to create and maintain a job requisition.</Para>
      <Para>The flow consisted of a job that had candidates, interviewers, criteria (which had questions), and rounds (which included its own set of candidates, interviewers, criteria, and questions).</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/002.png" cap="Mobile Interview Planning Flow (1 of 2)"/>
    <Image img = "../static/talent-sonar/003.png" cap="Mobile Interview Planning Flow (2 of 2)"/>
    <Textbox>
      <Para>In terms of the visual design, we wanted to keep simple iOS components. In doing so, we could ship the feature first, and iterate from there. Down the road, we want to explore a more dashboard-like view for jobs and tab bar navigation for candidates, criteria, and team member sections. We also hope to explore other interactions for lists like: swipe interactions for editing, drag and drop, and horizontal scrolling.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/004-1.png" cap="Add New Job + Job Criteria Flow"/>
    <Image img = "../static/talent-sonar/004-2.png" cap="Job Candidates + Job Team Members"/>
    <Image img = "../static/talent-sonar/004-3.png" cap="Round Candidates + Round Team Members"/>

    <Textbox>
      <H2>Component System</H2>
      <Para>While we worked on mobile features, opportunities to work on desktop designs also came up. Since they already had common components in their code, I created a design system within Sketch and collaborated with the Product Manager using Abstract. With a component system and version control for designs, we turned around mockups quicker and had a more efficient feedback loop when a feature story came in. This ensured more time focused on success metrics and usability rather than fiddle with aesthetics.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/005.png" cap="Sketch Component System"/>
    <Imagegrid img1 = "../static/talent-sonar/006.png" cap1="Abstract Version Control (1 of 2)" img2="../static/talent-sonar/007.png" cap2="Abstract Version Control (2 of 2)"/>

    <Textbox>
      <H2>Marketing / Sales</H2>
      <Para>Because I worked on the product, I had enough context to understand business goals and create informative illustrations for their marketing & sales teams. Blockframes became the main hero in the graphics and showcased certain features in development and within the current app. Other illustrations addressed a need to humanize the hiring process, while retaining context to the technology that powered it.</Para>
    </Textbox>

    <Grid>
      <GridImage
        column_l="1 / 2" row_l="1 / 2"
        column_m="3 / 4" row_m="1 / 2"
        column="2 / 3" row="1 / 2"
        image="url('../static/talent-sonar/008.png')"
      />
      <GridImage
        column_l="2 / 3" row_l="2 / 3"
        column_m="2 / 3" row_m="2 / 3"
        column="1 / 2" row="2 / 3"
        image="url('../static/talent-sonar/009.png')"
      />
      <GridImage
        column_l="3 / 4" row_l="1 / 2"
        column_m="3 / 4" row_m="3 / 4"
        column="2 / 3" row="2 / 3"
        image="url('../static/talent-sonar/010.png')"
      />
      <GridImage
        column_l="3 / 4" row_l="3 / 4"
        column_m="1 / 2" row_m="3 / 4"
        column="1 / 2" row="3 / 4"
        image="url('../static/talent-sonar/011.png')"
      />
      <GridImage
        column_l="4 / 5" row_l="2 / 3"
        column_m="2 / 3" row_m="4 / 5"
        column="2 / 3" row="3 / 4"
        image="url('../static/talent-sonar/012.png')"
      />
      <GridImage
        column_l="2 / 3" row_l="1 / 2"
        column_m="3 / 4" row_m="2 / 3"
        column="1 / 2" row="1 / 2"
        image="url('../static/talent-sonar/017.png')"
      />
      <GridImage
        column_l="4 / 5" row_l="3 / 4"
        column_m="1 / 2" row_m="4 / 5"
        column="2 / 3" row="5 / 6"
        image="url('../static/talent-sonar/018.png')"
      />
      <GridImage
        column_l="1 / 2" row_l="2 / 3"
        column_m="2 / 3" row_m="1 / 2"
        column="1 / 2" row="4 / 5"
        image="url('../static/talent-sonar/013.png')"
      />
      <GridImage
        column_l="2 / 3" row_l="3 / 4"
        column_m="1 / 2" row_m="2 / 3"
        column="2 / 3" row="4 / 5"
        image="url('../static/talent-sonar/014.png')"
      />
      <GridImage
        column_l="3 / 4" row_l="2 / 3"
        column_m="2 / 3" row_m="3 / 4"
        column="1 / 2" row="5 / 6"
        image="url('../static/talent-sonar/015.png')"
      />
    </Grid>
    <Image img = "../static/talent-sonar/016.png" cap="Talent Sonar Platform Overview"/>

  </Layout>
)
