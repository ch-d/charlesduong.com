import styled from "styled-components";
import { theme } from "../theme";

import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";
import ImagesTwo from "../components/case-study/ImagesTwo";
import { H2, H6, Para } from "../components/case-study/Typography";
import TextBox from "../components/case-study/TextBox";
import Container from "../components/case-study/Container";
import Section from "../components/case-study/Section";
import TwoColumn from "../components/case-study/TextTwoColumn";
import Carousel from "../components/case-study/Carousel";
import Embed from "../components/case-study/Embed";
import { ExternalLink } from "react-feather";

const CardContainer = styled.ol`
  counter-reset: section;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const Card = styled.li`
  list-style-type: none;
  display: flex;
  flex: 1 1 240px;
  background-color: ${theme.colors.green[10]};
  border-radius: 4px;
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
    <Section>
      <TextBox>
        <H2>Savings Account</H2>
        <Para>
          Studies show that homeownership improves many social outcomes like
          educational achievement, civic participation, health, crime, and
          property maintenance. However, saving for a downpayment is the primary
          reason renters don’t purchase a home. The Company partnered with a
          client company (“Client”) to provide a 2:1 down payment match for
          potential first time home buyers who were not approved for a
          conforming mortgage. The Company brought on a new PM, Brendan, for the
          project and together we went about designing an MVP in 6 weeks.
        </Para>
      </TextBox>

      <Container>
        <CardContainer>
          <Card>
            <CardTextContainer>
              <CardTitle>Savings Account</CardTitle>
              <CardContent>
                Display savings feature where customers can view and manage
                their savings within the Company application.
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
      </Container>
    </Section>

    <Section bg={theme.colors.green[10]}>
      <TextBox>
        <H6 color="green">Savings Account</H6>
        <H2>Customer Onboarding</H2>
        <Para>
          To get an understanding of how we can best work together, my initial
          task was to do a light refresh of the onboarding process. Brendan
          initiated a user flow in a Google Drawings doc, and we iterated
          together to clean up the designs. We communicated with Slack
          conversations + calls and Google Docs, while I made mockups in Figma.
          The goal was to not reinvent the wheel, add minor visual design
          touchups that could provide value, and try to reuse components that
          were already in the main app.
        </Para>
      </TextBox>
      {/* <ImagesTwo
        images={[
          {
            src: "../../static/finance/003.png",
            caption: "Create Account (AFTER)"
          },
          {
            src: "../../static/finance/002.png",
            caption: "Create Account (BEFORE)"
          }
        ]}
      />
      <ImagesTwo
        images={[
          {
            src: "../../static/finance/005.png",
            caption: "Down Payment Wallet (AFTER)"
          },
          {
            src: "../../static/finance/004.png",
            caption: "Down Payment Wallet (BEFORE)"
          }
        ]}
      />
      <Image
        src="../../static/finance/006.png"
        caption="Set up wallet transfers"
      /> */}
      <Carousel
        color="green"
        items={[
          {
            src: "../../static/finance/003.png",
            text: "Create Account (AFTER)"
          },
          {
            src: "../../static/finance/002.png",
            text: "Create Account (BEFORE)"
          },
          {
            src: "../../static/finance/005.png",
            text: "Down Payment Wallet (AFTER)"
          },
          {
            src: "../../static/finance/004.png",
            text: "Down Payment Wallet (BEFORE)"
          },
          {
            src: "../../static/finance/006.png",
            text: "Set up wallet transfers"
          }
        ]}
      />
    </Section>

    <Section>
      <TextBox>
        <H6 color="green">Savings Account</H6>
        <H2>Account Management</H2>
        <Para>
          After creating a new design aesthetic and getting a sense of how to
          work together, we began the account management side of the app. Now
          with the developer, Eric, we had weekly meetings to determine the best
          way to approach the feature set which the Client had asked for. The
          two main pages we worked on were the Account Dashboard and the Loan
          Details Page. It was expected that a user could both view the savings
          match progress and redeem those savings.
        </Para>
      </TextBox>

      <Carousel
        color="green"
        items={[
          {
            src: "../../static/finance/011.png",
            text: "Account Dashboard (PROPOSED)"
          },
          {
            src: "../../static/finance/012.png",
            text: "Account Dashboard (BEFORE)"
          },
          {
            src: "../../static/finance/014.png",
            text: "Loan Details I (PROPOSED)"
          },
          {
            src: "../../static/finance/015.png",
            text: "Loan Details I (BEFORE)"
          },
          {
            src: "../../static/finance/017.png",
            text: "Loan Details II (PROPOSED)"
          },
          {
            src: "../../static/finance/018.png",
            text: "Loan Details II (BEFORE)"
          }
        ]}
      />
    </Section>

    <Section bg={theme.colors.green[10]}>
      <TextBox>
        <H6 color="green">Savings Account</H6>
        <H2>Personal Learnings</H2>
        <Para>
          Ultimately, the designs were scaled down a bit to better fit
          engineering constraints. Although it achieved the scope, a good amount
          of the design discussions did not make it into the final product.
        </Para>
        <Para>
          This was my first experience working on a specific feature with a PM
          and developer. One important thing I learned was to not only focus on
          understanding the project scope, but to also understand the best
          process and tools the team is using.
        </Para>
        <Para>
          I was given creative freedom on the designs, but I did not get context
          on what the constraints of the engineering system were. Because the
          designs were all static mockups in Figma, it was hard to replicate
          into the actual project.
        </Para>
      </TextBox>

      <Carousel
        color="green"
        items={[
          {
            src: "../../static/finance/013.png",
            text: "Account Dashboard (SCOPED)"
          },
          {
            src: "../../static/finance/016.png",
            text: "Loan Details I (SCOPED)"
          },
          {
            src: "../../static/finance/019.png",
            text: "Loan Details II (SCOPED)"
          }
        ]}
      />
    </Section>

    <Section>
      <TextBox>
        <H2>Internal Customer Service Tool</H2>
        <Para>
          Keeping the lessons from the Savings Account project fresh in my mind,
          I partnered with a new PM and developer, Paul and Zach respectively.
          They were working on a refresh of their internal customer support
          tool. At the time, they had two different platform that the support
          team used, one an older legacy system and a more modern one that
          didn’t have all the features of the legacy platform. Out goal was to
          unify both into one consistent platform.
        </Para>
        <Para>
          My personal goals for this project was to have more user research
          opportunities and to use a framework and similar codebase to the one
          in development to better handoff to Zach. After given some initial
          specs and lo-fi wireframes in Google Docs, I started a repository
          using Next.js, React Material UI Components, and Airtable Backend API.{" "}
          <a href="https://5d126f9c73a1630007cf1344--inspiring-ride-bf5c15.netlify.com/loan/01">
            View Prototype
          </a>{" "}
          <ExternalLink size={12} />
        </Para>
      </TextBox>

      <Container>
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
      </Container>
    </Section>
  </Layout>
);
