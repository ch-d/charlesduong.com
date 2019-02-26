import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

// Layout Components
import Layout, { Divider, Description, Details, CategoryLabel, CategoryItem } from '../components/case-study/layout';
import Textbox from '../components/case-study/textbox';
import Image from '../components/case-study/image';
import Imagegrid from '../components/case-study/imagegrid';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

export default () => (
  <Layout
    title='Koeo Travel'
    date='Late 2017 &ndash;'
    disp3="none"
    titleCase="/koeo"
    desc="Koeo is a project and an opportunity to facilitate this exchange of authentic experiences. I hope it can give time back to travelers, so they can be fully present in the ephemeral moments of travel."
  >
    <Flex wrap py={4}>
      <Description>
        <H1>Group Travel Planner</H1>
        <Para>From an early age, I had the privilege to question and to wonder. My curiosity for a world outside my own started with books and reading. But, the act of physically being somewhere new and learning from people with different experiences was the greatest privilege of all. It was through traveling where I began to appreciate human connections with folks who had their own human stories.</Para> 
        <Para>Koeo is a simple group trip planning application and an opportunity to facilitate an exchange of authentic experiences. Users can collaborate with friends and family to organize future travel plans—from planning to mundane parts like transportation to planning exciting events. With more efficiency in the planning process, I time can be given back to all travelers so they can be fully present in the ephemeral moments of travel.</Para>
      </Description>
      <Flex>
        <Divider w="1"/>
        <Details>
          <CategoryLabel>Company</CategoryLabel>
            <CategoryItem>Koeo</CategoryItem>
          <CategoryLabel>Team Members</CategoryLabel>
            <CategoryItem>Taylor Dennis, JS Web Developer</CategoryItem>
            <CategoryItem>Rod Dennis, JS Web Developer</CategoryItem>
          <CategoryLabel>Projects</CategoryLabel>
            <CategoryItem>UI Design</CategoryItem>
            <CategoryItem>User Research</CategoryItem>
            <CategoryItem>Front-End Development</CategoryItem>
        </Details>
      </Flex>
    </Flex>
    <Image img = "../static/koeo/hero.png"/>

    <Textbox>
      <H2>Initial Development</H2>
      <Para>For initial research, we conducted user surveys and interviews. I also walked through and investigated the mental models travelers use when they plan trips. We found they mostly use Google documents and emails/text and sometimes found travel agents to plan their trips. We then discussed their current process and looked for pain points technology could resolve.</Para>
    </Textbox>
    <Image img = "../static/koeo/001.png" cap="Initial User Research"/>

    <Textbox>
      <Para>We decided to create a simple group trip planning application. Users can search for event, lodging, and transportation plans and organize a trip. I started with designs on <strong>Figma</strong>, but found an opportunity to work on the actual development. The other incredibly smart developers set up the infrastructure and patiently taught me back-end & javascript conventions along the way. We developed on the <strong>Vue</strong> framework, managed state with Vuex and <strong>Firebase</strong>, and deployed via <strong>Zeit's Now</strong>. To add extra polish to trip plans, I integrated external APIs like Unsplash's Image API.</Para>
    </Textbox>
    <Image img = "../static/koeo/002.png" cap="Initial Figma Designs"/>
    <Imagegrid img1 = "../static/koeo/001.gif" cap1="Add a Trip + Unsplash API" img2="../static/koeo/002.gif" cap2="Inline Edit Trip Details"/>

    <Textbox>
      <H2>Event Plans</H2>
      <Para>For event plans, we researched integrations with the Yelp, Tripadvisor, Google, and Fourquare APIs. We landed on <strong>Foursquare</strong> for its extensive data on venues and lists. I developed an integration that fetched Foursquare venue information and displayed in plan details. Plans added to the trip were added to Firebase, where users could later edit the plan details via a modal.</Para>
      <Para>Through this process, I gained plenty more empathy for developers. Before, I understood the non-triviality of programming, but did not fully experience the tedious balancing act between finding time to fix bugs or develop new features.</Para>
    </Textbox>
    <Image showBorder="true" img = "../static/koeo/003.gif" cap="Add a Plan + Foursquare API"/>
    <Image showBorder="true" img = "../static/koeo/004.gif" cap="Edit a Plan"/>

    <Textbox>
      <H2>Flight Plans</H2>
      <Para>Next, we worked off the Plan Component and added support to search flight information. Unfortunately, we found most flight APIs and data to be quite expensive. Since we only wanted to test the feature for the time being, we chose to integrate an open-source API, <a href="https://skypickerpublicapi.docs.apiary.io/">Skypicker</a>. I developed autocomplete inputs to search for flight info given Airline & Airport IATA code data.</Para>
    </Textbox>
    <Image showBorder="true" img = "../static/koeo/005.gif" cap="Autocomplete Flight Details"/>

    <Textbox>
      <H2>Future Designs</H2>
      <Para>Personally, this was a great exercise to understand Javacript and to better my designer-developer communication skills. In future updates, we will look at more flexible designs (possibly with a draggable and efficient timeline view). We also plan to refine the UX of lodging and transportation plans—events are usually flexible, but pre-trip planning is usually more complicated. And, depending on traveler needs, we have plans for voting and payment features. Sign up for updates here: <a href="https://koeo.co">koeo.co</a></Para>
    </Textbox>
    <Image img = "../static/koeo/006.gif" cap=""/>

  </Layout>
)
