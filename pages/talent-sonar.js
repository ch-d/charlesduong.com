import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

// Layout Components
import Layout from '../components/layout';
import Textbox from '../components/textbox';
import Image from '../components/image';
import Imagegrid from '../components/imagegrid';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

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

export default () => (
  <Layout
    title='Talent Sonar'
    date='Late 2017'
    disp1="none"
    titleCase="/talent-sonar"
    desc='Talent Sonar is a SaaS platform that addresses unconscious bias in the hiring process and provides a model for hiring teams to source and select the right fit for job requisitions. The platform provides identity-blind resume review to reduce bias when scanning resumes and structured interviews to reduce the tendency to make "Day One" Hires. Overall, the application promotes quantifiable decision making to find a long-term fit for companies. I worked with various stakeholders—product managers, developers,  and marketing/sales team. We worked together to ship features on their mobile app, web platform, and marketing collateral.'
  >

    <Textbox>
      <Para>Talent Sonar is a SaaS platform that addresses unconscious bias in the hiring process and provides a model for hiring teams to source and select the right fit for job requisitions. The platform provides identity-blind resume review to reduce bias when scanning resumes and structured interviews to reduce the tendency to make <a href="https://www.linkedin.com/pulse/theory-hiring-part-1-lou-adler/">"Day One" Hires</a>. Overall, the application promotes quantifiable decision making to find a long-term fit for companies. I worked with various stakeholders—product managers, developers, and marketing/sales team. We worked together to ship features on their mobile app, web platform, and marketing collateral.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/hero.png"/>

    <Textbox>
      <H2>Mobile Resume Review</H2>
      <Para>When I first came onboard, the mobile app was in its early stages and only gave interviewers the ability to reference, take notes during, and score interviews. A missing function recruiters and hiring managers sought was the ability to review resumes on the app. The resume redaction flow for web did not involve too many steps, so we decided to explore what this feature would look like in a mobile context.</Para>
    </Textbox>

    <Image img = "../static/talent-sonar/001.png" cap="Mobile Interview Planning Flow (1 of 2)"/>

    <Textbox>
      <Para>Since resumes are commonly used in context of 8.5 x 11 piece of paper, we knew it would be a design challenge to fit everything into the context of a mobile device. We explored ideas like tinder-like card swiping, floating action buttons, and counting taps. We landed on a prototype with a toolbar that slid halfway over a resume so users could have both the survey and resume to reference when reviewing.</Para>
      <Para>After testing our prototype, we found users needed proper affordances presented and swiping or tapping interactions were confusing for them. Ultimately, we decided the value proposition was not strong enough, especially with the amount of engineering needed to be implemented. We moved the feature to icebox and would take a look at it again another date.</Para>
    </Textbox>

    <Framer src="https://framer.cloud/gRnDc/" frameborder="0"/>

    <Textbox>
      <H2>Mobile Interview Planning</H2>
      <Para>A more important flow we wanted to push out was the interview planning flow. Through research, Talent Sonar found most interviewer and hiring manager personas often felt intimidated by the hiring process. They had very few interview experiences (at least from the hiring side) and mostly took advice from past experiences being interviewed. To help, we wanted to provide job templates (with pre-filled job criteria). From there, we could provide a structured path to create and maintain a job requisition.</Para>
      <Para>The flow consisted of a job that had candidates, interviewers, criteria (which had questions), and rounds (which included its own set of candidates, interviewers, criteria, and questions).</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/002.png" cap="Mobile Interview Planning Flow (1 of 2)"/>
    <Image img = "../static/talent-sonar/003.png" cap="Mobile Interview Planning Flow (2 of 2)"/>
    <Textbox>
      <Para>With the visual design of the flow, we wanted to keep simple iOS components. It was more important to keep things simple so we could ship the feature first, and iterate from there. Down the road, we want to explore a more dashboard-like view for jobs and tab bar navigation for candidates, criteria, and team member sections. We also hope to explore other interactions for lists like: swipe interactions for editing, drag and drop, and horizontal scrolling.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/004-1.png" cap="Add New Job + Job Criteria Flow"/>
    <Image img = "../static/talent-sonar/004-2.png" cap="Job Candidates + Job Team Members"/>
    <Image img = "../static/talent-sonar/004-3.png" cap="Round Candidates + Round Team Members"/>

    <Textbox>
      <H2>Component System</H2>
      <Para>While we worked on mobile features, opportunities to work on desktop designs also came up. Since they already had common components in their code, I created a design system within Sketch and collaborated with the Product Manager using Abstract. With a component system and version control for designs, we turned around mockups quicker and had a more efficient feedback loop when a feature story came in. This ensured more time focused on business goals and usability rather than fiddle with aesthetics.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/005.png" cap="Sketch Component System"/>
    <Imagegrid img1 = "../static/talent-sonar/006.png" cap1="Abstract Version Control (1 of 2)" img2="../static/talent-sonar/007.png" cap2="Abstract Version Control (2 of 2)"/>

    <Textbox>
      <H2>Marketing / Sales</H2>
      <Para>I also had a chance to update some of their graphic collateral. Working on product gave me enough context to understand business goals and create informative illustrations for their marketing & sales teams. Blockframes became the main hero in the graphics and showcased certain features in development and within the current app. We also worked on other directions to feel more human, but also provide context to the technology that powered it.</Para>
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
