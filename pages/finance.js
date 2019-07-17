import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";
import ImagesTwo from "../components/case-study/ImagesTwo";
import { H2, Para } from "../components/case-study/Typography";
import TextBox from "../components/case-study/TextBox";
import TwoColumn from "../components/case-study/TextTwoColumn";
import Carousel from "../components/case-study/Carousel";
import Embed from "../components/case-study/Embed";
import { ExternalLink } from "react-feather";

export default () => (
  <Layout
    title="Finance App"
    titleCase="/finance"
    desc="A company that helps you put a few dollars aside to make loan payments and allocate funds efficiently to get you out of debt faster."
    image="../static/finance/hero.png"
    color="green"
    introTitle="Forbes Fintech 50 Company"
    subTitleLabel="2018 – 2019"
    subTitleItem=""
    intro={[
      "This Forbes Fintech 50 Company (“Company”) had an overall mission to get Americans out of debt, save on interest payments and change the paycheck-to-paycheck cycle. When I joined the team, they were growing several service offerings on their web platform along with client partnerships to further this mission.",
      "Along with several one-off marketing and visual product design tasks, two main projects I worked on were a customer-facing Savings Account and an internal tool to help the customer service team better serve the Company’s users."
    ]}
    categories={[
      { type: "label", text: "Team Members" },
      { type: "item", text: "Brendan, PM; Savings Account" },
      { type: "item", text: "Eric, Developer; Savings Account" },
      { type: "item", text: "Paul, PM; Internal Tool" },
      { type: "item", text: "Zachary, Developer; Internal Tool" },
      { type: "label", text: "Projects" },
      { type: "item", text: "UI Design" },
      { type: "item", text: "User Research" },
      { type: "item", text: "UX Development" }
    ]}
  >
    <H2>Savings Account - Scope</H2>
    <TwoColumn>
      <Para>
        Studies show that homeownership improves many social outcomes like
        educational achievement, civic participation, health, crime, and
        property maintenance. However, saving for a downpayment is the #1 reason
        renters don’t purchase a home. To challenge this problem, the Company
        partnered with a client company (“Client”) to provide a 2:1 down payment
        match.
      </Para>
      <Para>
        The product manager described the scope of our project to create:
        <ol>
          <li>
            Savings Account - a savings feature where customers can view and
            manage their savings within the Company application.
          </li>
          <li>
            Matching - Display Client matching for savings towards a down
            payment on a mortgage up to specified limits.
          </li>
          <li>
            Redemption - Present information to consumers on how to redeem
            savings values allocated by Client toward the down payment on a
            mortgage.
          </li>
        </ol>
      </Para>
    </TwoColumn>

    <H2>Savings Account - Onboarding</H2>
    <TextBox>
      <Para>
        Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod
        semper. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </Para>
    </TextBox>
    <Carousel
      items={[
        {
          src: "../../static/lawyer-exchange/002.png"
        },
        {
          src: "../../static/lawyer-exchange/003.png"
        },
        {
          src: "../../static/lawyer-exchange/002.png"
        },
        {
          src: "../../static/lawyer-exchange/002.png"
        },
        {
          src: "../../static/lawyer-exchange/002.png"
        },
        {
          src: "../../static/lawyer-exchange/002.png"
        },
        {
          src: "../../static/lawyer-exchange/002.png"
        },
        {
          src: "../../static/lawyer-exchange/002.png"
        },
        {
          src: "../../static/lawyer-exchange/002.png"
        }
      ]}
    />

    <H2>Savings Account - Account Management</H2>
    <TextBox>
      <Para>
        Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod
        semper. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </Para>
    </TextBox>
    <H2>Savings Account - Learnings</H2>
    <TextBox>
      <Para>
        Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod
        semper. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </Para>
    </TextBox>

    {/* <H2>Bill Pay</H2>
    <Para>
      Proposed Design via Figma{" "}
      <a href="https://www.figma.com/proto/0kxdK5rbkVHmZs4lGtk0aO5c/bill-pay?node-id=0%3A1&viewport=-1054%2C-516%2C0.20870602130889893&scaling=scale-down-width">
        View Prototype
      </a>{" "}
      <ExternalLink size={12} />
    </Para>
    <Embed
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0kxdK5rbkVHmZs4lGtk0aO5c%2Fbill-pay%3Fnode-id%3D70%253A476%26viewport%3D-1191%252C-719%252C0.15821421146392822%26scaling%3Dscale-down-width"
      maxHeight={[384, 512]}
      border="1px solid"
      borderColor="green.100"
    /> */}

    <H2>Internal Customer Service Tool</H2>
    <Para>
      Prototype using Next.js, React Material UI Components, and Airtable
      Backend API; Best viewed on desktop.{" "}
      <a href="https://5d126f9c73a1630007cf1344--inspiring-ride-bf5c15.netlify.com/loan/01">
        View Prototype
      </a>{" "}
      <ExternalLink size={12} />
    </Para>
    <Embed
      src="https://5d126f9c73a1630007cf1344--inspiring-ride-bf5c15.netlify.com/loan/01"
      css={css`
        -ms-zoom: 0.6;
        -moz-transform: scale(0.6);
        -moz-transform-origin: 0 0;
        -o-transform: scale(0.6);
        -o-transform-origin: 0 0;
        -webkit-transform: scale(0.6);
        -webkit-transform-origin: 0 0;
        width: 166%;
        margin-right: -66%;
      `}
      mb={[-140, -280]}
      maxHeight={[640, 854]}
      border="1px solid"
      borderColor="green.100"
    />
  </Layout>
);
