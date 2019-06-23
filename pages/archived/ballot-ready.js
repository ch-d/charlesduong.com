import Layout from "../../components/case-study/Layout";
import Image from "../../components/case-study/Image";
import ImagesTwo from "../../components/case-study/ImagesTwo";
import { H2, Para } from "../../components/case-study/Typography";
import TextBox from "../../components/case-study/TextBox";

export default () => (
  <Layout
    title="Ballot Ready"
    titleCase="/ballot-ready"
    desc="Ballotready is an online voter guide that explains every candidate and referendum on your ballot."
    color="blue"
    introTitle="BallotReady"
    subTitleLabel=""
    subTitleItem="Late 2016"
    intro={[
      "Ballotready is an online voter guide that explains every candidate and referendum on your ballot. Although there was already massive press around the 2016 presidential election, it was difficult to guage candidates for local and sometimes obscure positions. In preparation for this election cycle, BallotReady helped American citizens research every name and issue on their local ballot, which would often otherwise be left blank. To extend the reach of the application, I helped the BallotReady team with marketing and visual design needs."
    ]}
    categories={[""]}
  >
    <Image src="../static/ballot-ready/hero.png" />

    <TextBox>
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
    </TextBox>

    <ImagesTwo
      images={[
        {
          src: "../static/ballot-ready/010.png",
          caption: "Early Exploration v1"
        },
        {
          src: "../static/ballot-ready/011.png",
          caption: "Early Exploration v2"
        }
      ]}
    />
    <ImagesTwo
      images={[
        {
          src: "../static/ballot-ready/012.png",
          caption: "Early Exploration v3"
        },
        {
          src: "../static/ballot-ready/001.png",
          caption: "Facebook Ad"
        }
      ]}
    />
    <ImagesTwo
      images={[
        {
          src: "../static/ballot-ready/013.gif",
          caption: "California Twitter Graphic"
        },
        {
          src: "../static/ballot-ready/002.gif",
          caption: "Illinois Twitter Graphic"
        }
      ]}
    />

    <TextBox>
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
    </TextBox>
    <Image src="../static/ballot-ready/006.png" caption="Newsletter Graphic" />
    <ImagesTwo
      images={[
        {
          src: "../static/ballot-ready/004.png",
          caption: "Blog Post Pie Chart"
        },
        {
          src: "../static/ballot-ready/005.png",
          caption: "Blog Post Graphic"
        }
      ]}
    />
    <Image src="../static/ballot-ready/003.png" caption="Blog Post Bar Graph" />
  </Layout>
);
