import { Flex, Box } from "grid-styled";
import styled from "styled-components";

// Layout Components
import Layout, { Divider } from "../../components/case-study/layout";
import Textbox from "../../components/case-study/textbox";
import Image from "../../components/case-study/image";
import Imagegrid from "../../components/case-study/imagegrid";

// Layout constants
import baseStyles from "../../constants/baseStyles";
import colors from "../../constants/colors";
import { H1, H2, Para } from "../../constants/typography";

export default () => (
  <Layout
    title="Ballot Ready"
    date="Late 2016"
    disp5="none"
    titleCase="/ballot-ready"
    desc="Ballotready is an online voter guide that explains every candidate and referendum on your ballot."
  >
    <Flex wrap pt={2} mx={[0, 4]} px={[0, 4]}>
      <H1>BallotReady</H1>
      <Divider h="1" />
      <H1
        style={{
          fontSize: "0.875rem",
          opacity: "0.6",
          textTransform: "uppercase",
          letterSpacing: "0.1rem"
        }}
      >
        Late 2016
      </H1>
    </Flex>

    <Textbox>
      <Para>
        Ballotready is an online voter guide that explains every candidate and
        referendum on your ballot. Although there was already massive press
        around the 2016 presidential election, it was difficult to guage
        candidates for local and sometimes obscure positions. In preparation for
        this election cycle, BallotReady helped American citizens research every
        name and issue on their local ballot, which would often otherwise be
        left blank. To extend the reach of the application, I helped the
        BallotReady team with marketing and visual design needs.
      </Para>
    </Textbox>
    <Image hero img="../static/ballot-ready/hero.png" />

    <Textbox>
      <H2>Social Media Ads</H2>
      <Para>
        My first task was to develop marketing assets for Facebook and Twitter
        ads. After a period of discovery, we identified their strongest market
        included adults 45 and up. We found they really enjoyed the potentials
        of BallotReady, because they were already politically engaged citizens,
        but didn’t have resources to vote informed all the way down the ballot.
        In counties like Cook County, Illinois, there were upwards of 100
        positions to vote on, and it was often difficult to determine who was
        actually qualified.
      </Para>
    </Textbox>

    <Imagegrid
      img1="../static/ballot-ready/010.png"
      cap1="Early Exploration v1"
      img2="../static/ballot-ready/011.png"
      cap2="Early Exploration v2"
    />
    <Imagegrid
      img1="../static/ballot-ready/012.png"
      cap1="Early Exploration v3"
      img2="../static/ballot-ready/001.png"
      cap2="Facebook Ad"
    />
    <Imagegrid
      img1="../static/ballot-ready/013.gif"
      cap1="California Twitter Graphic"
      img2="../static/ballot-ready/002.gif"
      cap2="Illinois Twitter Graphic"
    />

    <Textbox>
      <H2>Data Visualization & Revisions</H2>
      <Para>
        As the deadline of the election neared closer, we decided to reach out
        to the millenial market with data visualizations and blog articles. To
        address this younger crowd, I changed the color palette to include a
        more modern look with playful colors and tried to recreate simple
        "trendy" graphics with BallotReady’s database of over 13,000 candidates.
        Our goal with these ads were to reach those less politically engaged,
        and could portray the image of voting informed in a more positive light.
      </Para>
    </Textbox>
    <Image img="../static/ballot-ready/006.png" cap="Newsletter Graphic" />
    <Imagegrid
      img1="../static/ballot-ready/004.png"
      cap1="Blog Post Pie Chart"
      img2="../static/ballot-ready/005.png"
      cap2="Blog Post Graphic"
    />
    <Image img="../static/ballot-ready/003.png" cap="Blog Post Bar Graph" />
  </Layout>
);
// <Imagegrid img1 = "../static/ballot-ready/014.png" cap1="Another Bar Graph (1 of 2)" img2="../static/ballot-ready/015.png" cap2="Another Bar Graph (2 of 2)"/>
// <Imagegrid img1 = "../static/ballot-ready/008.png" cap1="Election Week Graphic (1 of 2)" img2="../static/ballot-ready/009.png" cap2="Election Week Graphic (2 of 2)"/>
