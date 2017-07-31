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
    title='Ballot Ready'
    disp3="none"
    titleCase="/ballot-ready"
    desc="Ballotready is an online voter guide that explains every candidate and referendum on your ballot. Although there was already massive press around the 2016 presidential election, it was difficult to guage candidates for local and sometimes obscure positions. In preparation for this election cycle, BallotReady helped American citizens research every name and issue on their local ballot, which would often otherwise be left blank. To extend the reach of the application, I helped the BallotReady team with marketing and visual design needs."
  >

    <Textbox>
      <Para>Ballotready is an online voter guide that explains every candidate and referendum on your ballot. Although there was already massive press around the 2016 presidential election, it was difficult to guage candidates for local and sometimes obscure positions. In preparation for this election cycle, BallotReady helped American citizens research every name and issue on their local ballot, which would often otherwise be left blank. To extend the reach of the application, I helped the BallotReady team with marketing and visual design needs.</Para>
    </Textbox>
      <Image hero img = "../static/ballot-ready/hero.png"/>

    <Textbox>
      <H2>Social Media Ads</H2>
      <Para>My first task was to develop marketing assets for Facebook and Twitter ads. After a period of discovery, we identified their strongest market included adults 45 and up. We found they really enjoyed the potentials of BallotReady, because they were already politically engaged citizens, but didn’t have resources to vote informed all the way down the ballot. In counties like Cook County, Illinois, there were upwards of 100 positions to vote on, and it was often difficult to determine who was actually qualified.</Para>
    </Textbox>

    <Imagegrid img1 = "../static/ballot-ready/010.png" cap1="Early Exploration v1" img2="../static/ballot-ready/011.png" cap2="Early Exploration v2"/>
    <Imagegrid img1 = "../static/ballot-ready/012.png" cap1="Early Exploration v3" img2="../static/ballot-ready/001.png" cap2="Facebook Ad"/>
    <Imagegrid img1 = "../static/ballot-ready/013.gif" cap1="California Twitter Graphic" img2="../static/ballot-ready/002.gif" cap2="Illinois Twitter Graphic"/>

    <Textbox>
      <H2>Data Visualization & Revisions</H2>
      <Para>As the deadline of the election neared closer, we decided to address a younger market with data visualizations and blog articles. To reach them, I changed the color palette to include a more modern look with playful colors and tried to recreate simple "trendy" graphics. Our goal with these ads were to reach those less politically engaged, and could portray the image of voting informed in a more positive light.</Para>
    </Textbox>
    <Image img = "../static/ballot-ready/006.png" cap="Newsletter Graphic"/>
    <Imagegrid img1 = "../static/ballot-ready/005.png" cap1="Blog Post Graphic" img2="../static/ballot-ready/004.png" cap2="Blog Post Pie Chart"/>
    <Image img = "../static/ballot-ready/003.png" cap="Blog Post Bar Graph"/>
    <Imagegrid img1 = "../static/ballot-ready/008.png" cap1="Election Week Facebook Ad (1 of 2)" img2="../static/ballot-ready/009.png" cap2="Election Week Facebook Ad (2 of 2)"/>

  </Layout>
)
