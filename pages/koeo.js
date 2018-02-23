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
    title='Koeo Travel'
    date='Late 2017 &ndash;'
    disp3="none"
    titleCase="/koeo"
    desc="From an early age, I had the privilege to question and to wonder. My curiosity for a world outside my own started with books and reading. But, the act of physically being somewhere new and learning from people with different experiences was the greatest privilege of all. It was through traveling where I began to appreciate human connections with folks who had their own human stories. This project is an opportunity to facilitate this exchange of authentic experiences. I hope it can give time back to travelers, so they can be fully present in the ephemeral moments of travel."
  >

    <Textbox>
      <Para>From an early age, I had the privilege to question and to wonder. My curiosity for a world outside my own started with books and reading. But, the act of physically being somewhere new and learning from people with different experiences was the greatest privilege of all. It was through traveling where I began to appreciate human connections with folks who had their own human stories. Koeo is a project and an opportunity to facilitate this exchange of authentic experiences. I hope it can give time back to travelers, so they can be fully present in the ephemeral moments of travel.</Para>
    </Textbox>
    <Image img = "../static/koeo/hero.png"/>

    <Textbox>
      <H2>Initial Development</H2>
      <Para>We began research by sending out user surveys and conducting user interviews. I walked through and investigated the mental models travelers have when they plan trips. We found that travelers mostly used Google documents and emails/text when planning a trip on their own. The other option was finding travel agents to plan their trips for them. Through discussion of their current process, we looked for painpoints and how technology could resolve any obstacles they had.</Para>
    </Textbox>
    <Image img = "../static/koeo/001.png" cap="Initial User Research"/>

    <Textbox>
      <Para>We decided to create a simple group trip planning application. Users can search for event, lodging, and transportation plans and organize a trip. I started off with designs on <strong>Figma</strong>, but found an opportunity to work on the actual development. The team was incredibly smart and patient with me—they set up the infrastructure for the webapp and taught me back-end & javascript conventions along the way. We developed on the <strong>Vue</strong> framework, managed state with Vuex and <strong>Firebase</strong>, and deployed via <strong>Zeit's Now</strong>. To add extra polish to trip plans, we also found ways to integrate external APIs like Unsplash's Image API.</Para>
    </Textbox>
    <Image img = "../static/koeo/002.png" cap="Initial Figma Designs"/>
    <Imagegrid img1 = "../static/koeo/001.gif" cap1="Add a Trip + Unsplash API" img2="../static/koeo/002.gif" cap2="Inline Edit Trip Details"/>

    <Textbox>
      <H2>Planning Events</H2>
      <Para>For event plans, we researched integrations with the Yelp, Tripadvisor, Google, and Fourquare APIs. We landed on <strong>Foursquare</strong> for its extensive data on venues and lists. I developed an integration that fetched JSON objects from the Foursquare API and displayed venue information in plan details. Plans added to the trip were added to Firebase, where users could later edit the plan details via a modal. Through this process, I gained more empathy for developers. Before, I understood the non-triviality of programming, but I did not fully experience having to balance time spent fixing a bug or developing a new feature.</Para>
    </Textbox>
    <Image showBorder="true" img = "../static/koeo/003.gif" cap="Add a Plan + Foursquare API"/>
    <Image showBorder="true" img = "../static/koeo/004.gif" cap="Edit a Plan"/>

    <Textbox>
      <H2>Planning Flights</H2>
      <Para>With Vue's component-base structure, we fortunately did not have to start from scratch for the flight API integration. However, we found that most flight information and flight data was quite expensive. Since we only wanted to test out the feature for now, we chose to integrate <a href="https://skypickerpublicapi.docs.apiary.io/">Skypicker</a>'s open-source API. I developed autocomplete inputs to search for flight info given Airline & Airport IATA code data.</Para>
    </Textbox>
    <Image showBorder="true" img = "../static/koeo/005.gif" cap="Autocomplete Flight Details"/>

    <Textbox>
      <H2>Future Designs</H2>
      <Para>Personally, this was a great exercise to understand Javacript and to communicate with developers better. In future updates, we will look into a more flexible design with a condensed and efficient timeline view. We also plan on a refined UX for the lodging and transportation plan flows. Events are usually flexible, but pre-trip planning takes a more opinionated flow. And, depending on user needs, we have plans for voting and payment features. Since software is never fully complete, we will continue to explore ways to reduce time spent planning, and increase time spent experiencing travel. Sign up for updates here: <a href="https://koeo.co">koeo.co</a></Para>
    </Textbox>
    <Image img = "../static/koeo/006.gif" cap=""/>

  </Layout>
)
