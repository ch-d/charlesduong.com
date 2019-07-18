import styled from "styled-components";
import { theme } from "../theme";

import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";
import ImagesTwo from "../components/case-study/ImagesTwo";
import { H2, H6, Para } from "../components/case-study/Typography";
import TextBox from "../components/case-study/TextBox";
import TwoColumn from "../components/case-study/TextTwoColumn";
import Carousel from "../components/case-study/Carousel";
import Embed from "../components/case-study/Embed";
import { ExternalLink } from "react-feather";

const CardContainer = styled.ol`
  counter-reset: section;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 4rem;
`;

const Card = styled.li`
  list-style-type: none;
  display: flex;
  flex: 1 1 240px;
  background-color: ${theme.colors.green[10]};
  border-radius: 4px;
  border: 1px solid ${theme.colors.green[100]};
  padding: 16px;
  margin: 8px;
  position: relative;
  &:before {
    counter-increment: section;
    content: counter(section);
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.green[500]};
    position: absolute;
    top: 16px;
    left: 32px;
    z-index: 1;
  }
`;

const CardTextContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  &:before {
    display: block;
    content: " ";
    background-color: ${theme.colors.green[50]};
    position: absolute;
    // pseudo top = margin top
    top: -32px;
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }
`;

const CardTitle = styled.h4`
  color: ${theme.colors.green[500]};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  color: ${theme.colors.green[800]};
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 0;
`;

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
      "Along with several one-off marketing and visual product design tasks, two main projects I worked on were a customer-facing Savings Account and an internal tool to help the customer service team better serve the Company’s users.",
      "[Case Study WIP]"
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
    <TextBox>
      <H2>Savings Account</H2>
      <Para>
        Studies show that homeownership improves many social outcomes like
        educational achievement, civic participation, health, crime, and
        property maintenance. However, saving for a downpayment is the primary
        reason renters don’t purchase a home. The Company partnered with a
        client company (“Client”) to provide a 2:1 down payment match for
        potential first time home buyers who were not approved for a conforming
        mortgage.
      </Para>
    </TextBox>

    <TextBox>
      <H6 color="green">Savings Account</H6>
      <H2>Onboarding</H2>
      <Para>
        To get an understanding of how we can best work together, My initial
        task was to do a light refresh of the on boarding process. Brendan
        initiated a user flow in a Google Drawings doc, and we iterated together
        to clean up the designs. We communicated with Slack conversations +
        calls and Google Docs, while I made mockups in Figma. The goal was to
        not reinvent the wheel, add minor visual design touchups that could
        provide value, and try to reuse components that were already in the main
        app.
      </Para>
    </TextBox>
    <Carousel
      color="green"
      items={[
        {
          src: "../../static/finance/001.png",
          text: "Lo-Fidelity Flow from PM"
        },
        {
          src: "../../static/finance/002.png",
          text: "Create Account (BEFORE)"
        },
        {
          src: "../../static/finance/003.png",
          text: "Create Account (AFTER)"
        },
        {
          src: "../../static/finance/004.png",
          text: "Down Payment Wallet (BEFORE)"
        },
        {
          src: "../../static/finance/005.png",
          text: "Down Payment Wallet (AFTER)"
        },
        {
          src: "../../static/finance/006.png",
          text: "Set up wallet transfers"
        }
      ]}
    />

    <TextBox>
      <H6 color="green">Savings Account</H6>
      <H2>Account Management</H2>
      <Para>
        After creating a new design aesthetic and getting a sense of how to work
        together, we began the account management side of the app. Now with the
        developer, Eric, we had weekly meetings to determine the best way to
        approach the feature set which the Client had asked for. Brendan
        described the scope of our project to create an MVP with the following
        features:
      </Para>
    </TextBox>
    <CardContainer>
      <Card>
        <CardTextContainer>
          <CardTitle>Savings Account</CardTitle>
          <CardContent>
            Display savings feature where customers can view and manage their
            savings within the Company application.
          </CardContent>
        </CardTextContainer>
      </Card>
      <Card>
        <CardTextContainer>
          <CardTitle>Matching</CardTitle>
          <CardContent>
            Display Client matching for savings towards a down payment on a
            mortgage up to specified limits.
          </CardContent>
        </CardTextContainer>
      </Card>
      <Card>
        <CardTextContainer>
          <CardTitle>Redemption</CardTitle>
          <CardContent>
            Present information to consumers on how to redeem savings values
            allocated by Client toward the down payment on a mortgage.
          </CardContent>
        </CardTextContainer>
      </Card>
    </CardContainer>

    <Carousel
      color="green"
      items={[
        {
          src: "../../static/finance/011.png",
          text: "Account Dashboard (BEFORE + AFTER)"
        }
      ]}
    />

    <div
      style={{
        width: "100%",
        height: 4,
        backgroundColor: theme.colors.green[200],
        marginTop: "4rem",
        marginBottom: ".5rem"
      }}
    />
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: theme.colors.green[200],
        marginBottom: "4rem"
      }}
    />

    <TextBox>
      <H2>Bill Pay</H2>
      <Para>
        Proposed Design via Figma{" "}
        <a href="https://www.figma.com/proto/0kxdK5rbkVHmZs4lGtk0aO5c/bill-pay?node-id=0%3A1&viewport=-1054%2C-516%2C0.20870602130889893&scaling=scale-down-width">
          View Prototype
        </a>{" "}
        <ExternalLink size={12} />
      </Para>
    </TextBox>

    <Embed
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0kxdK5rbkVHmZs4lGtk0aO5c%2Fbill-pay%3Fnode-id%3D70%253A476%26viewport%3D-1191%252C-719%252C0.15821421146392822%26scaling%3Dscale-down-width"
      maxHeight={[384, 512]}
      border="1px solid"
      borderColor="green.100"
    />

    <TextBox>
      <H6 color="green">Savings Account</H6>
      <H2>Learnings</H2>
      <Para>
        Ultimately, the designs were scaled down a bit to better fit engineering
        constraints. Although it achieved the scope, a good amount of the design
        discussions did not make it into the final product.
      </Para>
      <Para>
        This was my first experience working on a specific feature with a PM and
        developer. One important thing I learned was to not only focus on
        understanding the project scope, but to also understand the best process
        and tools the team is using.
      </Para>
      <Para>
        I was given creative freedom on the designs, but I did not get context
        on what the constraints of the engineering system were. Because the
        designs were all static mockups in Figma, it was hard to replicate into
        the actual project.
      </Para>
    </TextBox>

    <div
      style={{
        width: "100%",
        height: 4,
        backgroundColor: theme.colors.green[200],
        marginTop: "4rem",
        marginBottom: ".5rem"
      }}
    />
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: theme.colors.green[200],
        marginBottom: "4rem"
      }}
    />

    <TextBox>
      <H2>Internal Customer Service Tool</H2>
      <Para>
        Keeping the lessons from the Savings Account project fresh in my mind, I
        partnered with a new PM and developer, Paul and Zach respectively. They
        were working on a refresh of their internal customer support tool. At
        the time, they had two different platform that the support team used,
        one an older legacy system and a more modern one that didn’t have all
        the features of the legacy platform. Out goal was to unify both into one
        consistent platform.
      </Para>
      <Para>
        My personal goals for this project was to have more user research
        opportunities and to use a framework and similar codebase to the one in
        development to better handoff to Zach. After given some initial specs
        and lo-fi wireframes in Google Docs, I started a repository using
        Next.js, React Material UI Components, and Airtable Backend API.{" "}
        <a href="https://5d126f9c73a1630007cf1344--inspiring-ride-bf5c15.netlify.com/loan/01">
          View Prototype
        </a>{" "}
        <ExternalLink size={12} />
      </Para>
    </TextBox>

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
