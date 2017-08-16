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

export default () => (
  <Layout
    title='Luna Lights'
    disp2="none"
    titleCase="/luna-lights"
    desc="Luna Lights is an automated lighting system that utilizes cloud based data analytics to prevent and detect falls in the older adult population. They recorded data on their personal backend system, but the only method of report was through screen­shots from a third party extension. The goal for this project was to provide a streamlined way for care providers to interact with data about their residents and further inform better care for older adults."
  >
    <Textbox>
      <Para>Luna Lights is an automated lighting system that utilizes cloud based data analytics to prevent and detect falls in the older adult population. In March 2016, they recorded data on their personal backend system, but the only method of report was through screen­shots from a third party extension, Mixpanel. The goal for this project was to design a streamlined way for care providers to interact with data about their residents and further inform better care for older adults.</Para>
    </Textbox>
      <Image img = "../static/luna-lights/hero.png"/>

    <Textbox>
      <H2>Ideation</H2>
      <Para>After several brainstorming sessions, we decided to design for the interaction between the night time staff and the day time staff. Strong communication was present between the staff members throughout the day, but it seemed to break down during shift changes. With this in mind, we explored ways to help day time staff members to easily observe any anomalies when they first come into work.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/luna-lights/001.png" cap1="Whiteboard Ideation" img2="../static/luna-lights/002.png" cap2="Notebook Ideation"/>

    <Textbox>
      <H2>Structure</H2>
      <Para>We were all new to data visualization, so we wanted to spend time understanding how to structure graphs and information. The most useful insights came from an <a href="https://medium.com/truth-labs/designing-data-driven-interfaces-a75d62997631">article by Truth Labs</a>, which helped us create a hierarchy where urgent hourly data was at the top, a daily view of all residents came next, and any individual resident data would be presented at the bottom.</Para>
      <H2>Hourly View</H2>
      <Para>Their current API gave us the option to make GET requests for timestamps of when residents got in and out of bed, as well as any alerts sent to caregivers the night before. (Alerts are sent when residents are out of bed for a predetermined amount of time.) After several iterations, we determined the best way to display this data was in the form of something similiar to a gannt chart.</Para>
    </Textbox>
    <a href="https://projects.invisionapp.com/share/AE7FSGHYS#/161047204_Last12hours-00">
      <Image img = "../static/luna-lights/003.png" cap="Hourly View Prototype"/>
    </a>

    <Textbox>
      <H2>Daily View</H2>
      <Para>While iterating on the daily view, I saw myself repeating processes and looked for ways to design a better flow for creating prototypes. Using new nested symbols Sketch feature, I worked on a system of symbols and styles that represented each state the view could be. I then exported it out to a Dropbox folder and synced it up with an <a href="https://projects.invisionapp.com/share/K87FSGOWY#/screens/161818578_All-Residents-01-01">Invision prototype</a> to see if the interactions made sense. This gave us more time to test any assumptions we had and iterate further.</Para>
      <H2>Resident View</H2>
      <Para>After a user found a resident they wanted to investigate further, they could navigate to a card with individual hourly, daily, and numbers. The resident view placed precendent in the line graph and hard numbers over the urgent hourly view. This gave the day time staff a means for more thoughtful interactions of long-term trends for individual residents.</Para>
    </Textbox>
    <Image img = "../static/luna-lights/004.gif" cap="Sketch Nested Symbol Process"/>
    <Imagegrid img1 = "../static/luna-lights/005.png" cap1="Daily View Prototype" img2="../static/luna-lights/006.png" cap2="Resident View Prototype"/>


    <Textbox>
      <H2>Final Mockup</H2>
      <Para>After a month of experimenting with processes and designs, we came up with this final mockup. At first, data visualization was a tricky UI challenge that seemed too overwhelming to tackle and we did not know where to start. But as time went on, each challenge became a little more clear. We did not have time to implement the designs as code, but it was a strong exercise in understanding design tools and workflows.</Para>
    </Textbox>
    <Image img = "../static/luna-lights/007.png" cap="Final Dashboard View"/>
    <Imagegrid img1 = "../static/luna-lights/008.gif" cap1="Final Hourly View" img2="../static/luna-lights/009.gif" cap2="Final Daily View"/>

  </Layout>
)
