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
    <Section>
      <TextBox>
        <H2>Savings Account</H2>
        <Para>
          Studies show homeownership improves many social outcomes like
          educational achievement, civic participation, health, crime, and
          property maintenance. However, saving for a downpayment is the primary
          reason renters don’t purchase a home. The Company partnered with a
          client company (“Client”) to provide a 2:1 down payment match for
          potential first time home buyers who were not approved for a
          conforming mortgage. The Company brought on a new PM, Brendan, for the
          project and together we designed an MVP in 6 weeks. We scoped out a
          feature set that included:
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
        <H6>Savings Account</H6>
        <H2>Customer Onboarding</H2>
        <Para>
          To get an understanding of how to best work together, my initial task
          was to do a light refresh of the onboarding process. Brendan initiated
          a user flow in a Google Drawings doc, and we iterated together to
          clean up the designs. We communicated through Slack conversations +
          calls and Google Docs, while I made mockups in Figma. The goal was to
          not reinvent the wheel, add minor visual design touchups that could
          provide value, and try to reuse components that were already in the
          main app.
        </Para>
      </TextBox>
      <ImagesTwo
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
      <ImagesTwo
        images={[
          {
            src: "../../static/finance/006.png",
            caption: "Set up wallet transfers"
          }
        ]}
      />
    </Section>

    <Section>
      <TextBox>
        <H6>Savings Account</H6>
        <H2>Account Management</H2>
        <Para>
          After creating a new design aesthetic and getting a sense of how to
          work together, we began the account management side of the app. Now
          with the developer, Eric, we had weekly meetings to determine the best
          way to approach the feature set. The two main pages we worked on were
          the Account Dashboard and the Loan Details Page. It was expected that
          a user could both view the savings match progress and redeem those
          savings on these pages.
        </Para>
      </TextBox>

      <ImagesTwo
        images={[
          {
            src: "../../static/finance/011.png",
            caption: "Account Dashboard (PROPOSED)"
          },
          {
            src: "../../static/finance/012.png",
            caption: "Account Dashboard (BEFORE)"
          }
        ]}
      />
      <ImagesTwo
        images={[
          {
            src: "../../static/finance/013.png",
            caption: "Down Payment Wallet (AFTER)"
          },
          {
            src: "../../static/finance/014.png",
            caption: "Down Payment Wallet (BEFORE)"
          }
        ]}
      />
    </Section>

    <Section bg={theme.colors.green[10]}>
      <TextBox>
        <H6>Savings Account</H6>
        <H2>Personal Learnings</H2>
        <Para>
          Ultimately, the designs were scaled down to better fit engineering
          constraints. Although it achieved the scope, a good amount of the
          design discussions did not make it into the final product.
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

      <ImagesTwo
        images={[
          {
            src: "../../static/finance/015.png",
            caption: "Account Dashboard (SCOPED)"
          },
          {
            src: "../../static/finance/016.png",
            caption: "Loan Details (SCOPED)"
          }
        ]}
      />
    </Section>

    <Section>
      <TextBox>
        <H2>Internal Customer Service Tool</H2>
        <Para>
          With the lessons from the Savings Account project fresh in mind, I
          partnered with a new PM and developer, Paul and Zach respectively. At
          the time, the support team had two different internal customer support
          platforms—one an older legacy system and one modern system without all
          the features of the legacy platform. Since this was an internal tool,
          the requirements were a bit broader than the Savings Account platform:
        </Para>
      </TextBox>
      <Container>
        <CardContainer>
          <Card>
            <CardTextContainer>
              <CardTitle>Make it magical ✨</CardTitle>
              <CardContent>
                Improve the user experience for us and in turn for our
                customers!
              </CardContent>
            </CardTextContainer>
          </Card>
          <Card>
            <CardTextContainer>
              <CardTitle>Make it scale 📐</CardTitle>
              <CardContent>
                Ensure new features can be added down the road to a larger
                Happiness team and 500k+ accounts.
              </CardContent>
            </CardTextContainer>
          </Card>
          <Card>
            <CardTextContainer>
              <CardTitle>Consolidate current platforms 🧹</CardTitle>
              <CardContent>
                Retire old legacy system and the current system UI for one new
                central source of truth system.
              </CardContent>
            </CardTextContainer>
          </Card>
        </CardContainer>
      </Container>
    </Section>

    <Section bg={theme.colors.green[10]}>
      <TextBox>
        <H6>Internal CS Tool</H6>
        <H2>Lo-fidelity + Repository Setup</H2>
        <Para>
          Another personal goal for this project was to use a framework and
          similar codebase to the one in development to better handoff to Zach.
          After I received the initial specs and lo-fi wireframes in Google
          Docs, I started a repository using Next.js, React Material UI
          Components, and Airtable Backend API. For reviews, I walked through
          prototypes with builds deployed on Netlify.
        </Para>
      </TextBox>

      <ImagesTwo
        images={[
          {
            src: "../static/finance/031.png",
            caption: "Google Sheets: Information Architecture"
          },
          {
            src: "../static/finance/033.png",
            caption: "Next.js + Material-UI.js"
          }
        ]}
      />
      <ImagesTwo
        images={[
          {
            src: "../static/finance/032.png",
            caption: "Airtable: Back End Data"
          },
          {
            src: "../static/finance/034.png",
            caption: "Netlify: Deployment"
          }
        ]}
      />
    </Section>

    <Section>
      <TextBox>
        <H6>Internal CS Tool</H6>
        <H2>Team Interview + Current Workflow</H2>
        <Para>
          To kick off the project, Paul and I had an opportunity to interview
          the customer service team and run through their current workflows.
        </Para>
        <Para>
          The team ranged from those employed a few months adjusting to how
          things work to those employed a few years with their own hacks to
          compensate for quirks in the software. Although we received feedback
          from the latter persona, we decided to focus on the former persona
          needs. Rather than force a new way of doing things, we wanted the new
          system to be an extension of the current workflows the team{" "}
          <i>could</i> use.
        </Para>
        <Para>Through the interviews, we noticed three main challenges:</Para>
      </TextBox>

      <ImagesTwo
        images={[
          {
            src: "../static/finance/021.png",
            caption: "Four Different Search Experiences"
          },
          {
            src: "../static/finance/022.png",
            caption: "Customer Page"
          }
        ]}
      />
      <TextBox>
        <Para>
          <ol>
            <li>
              <b>Search Pages:</b> The search experience to reach customers,
              loans, or transactions was spread out on multiple pages with
              different experiences. It also took up a whole page, where other
              content could be present.
            </li>
            <li>
              <b>Customer Page:</b> The customer page had the bare minimum of
              information. It also took an extra step to get to any other
              page—actions were hidden in a dropdown menu on top of loans.
            </li>
          </ol>
        </Para>
      </TextBox>

      <Image
        src="../static/finance/023.png"
        caption="Three Different Pages to Reference Schedule Change"
      />
      <TextBox>
        <Para>
          <ol start="3">
            <li>
              <b>Transactions Page:</b> The transactions page was the most
              interfaced page for the team. Although it had all the information
              the team needed to reference, there were some quirks others
              compensated with hacks. For one, we noticed they would open edit
              pages alongside the transaction table. They had to switch back and
              forth between screens to get things done. We also noticed how
              difficult it was to reference which transaction belonged to which
              pay period they were editing. They would highlight the rows of
              that period to quickly reference.
            </li>
          </ol>
        </Para>
      </TextBox>
    </Section>

    <Section bg={theme.colors.green[10]}>
      <TextBox center>
        <H6>Internal CS Tool</H6>
        <H2>Universal Search Component</H2>
      </TextBox>
      <ImagesTwo
        images={[
          {
            src: "../static/finance/041.gif",
            caption: "Iteration I: Search Options Left Bar"
          },
          {
            src: "../static/finance/042.gif",
            caption: "Iteration II: Search Options Inline Options"
          }
        ]}
      />
      <Image src="../static/finance/043.gif" caption="Finalized Iteration" />
    </Section>

    <Section>
      <TextBox center>
        <H6>Internal CS Tool</H6>
        <H2>Enhanced Customer Page</H2>
      </TextBox>
      <Carousel
        color="green"
        items={[
          {
            src: "../static/finance/051.png",
            text: "Finalized Iteration"
          },
          {
            src: "../static/finance/052.png",
            text: "Finalized Iteration: Drawer + Tabs"
          },
          {
            src: "../static/finance/053.gif",
            text: "Iteration I: Modal"
          },
          {
            src: "../static/finance/054.gif",
            text: "Iteration II: Inline Edit"
          },
          {
            src: "../static/finance/055.gif",
            text: "Iteration III: Drawer"
          },
          {
            src: "../static/finance/056.gif",
            text: "Iteration IV: Drawer + Dropdown"
          },
          {
            src: "../static/finance/057.gif",
            text: "Iteration V: Drawer + Tabs"
          }
        ]}
      />
    </Section>

    <Section bg={theme.colors.green[10]}>
      <TextBox center>
        <H6>Internal CS Tool</H6>
        <H2>Enhanced Transaction Page</H2>
      </TextBox>
      <Carousel
        color="green"
        items={[
          {
            src: "../static/finance/067.png",
            text: "Finalized Iteration"
          },
          {
            src: "../static/finance/061.png",
            text: "Iteration I: Separate Columns"
          },
          {
            src: "../static/finance/062.png",
            text: "Iteration II: Only Transaction Column"
          },
          {
            src: "../static/finance/063.png",
            text: "Iteration III: Consolidated Date Columns"
          },
          {
            src: "../static/finance/064.png",
            text:
              "Iteration IV: Group Rows by Pay Period + Highlight Selected I"
          },
          {
            src: "../static/finance/065.png",
            text:
              "Iteration V: Group Rows by Pay Period + Highlight Selected II"
          },
          {
            src: "../static/finance/066.png",
            text:
              "Iteration VI: Group Rows by Pay Period + Highlight Selected III"
          }
        ]}
      />
    </Section>

    <Section>
      <TextBox>
        <H6>Internal CS Tool</H6>
        <H2>Further Enhancements: Calculators + Schedulers</H2>
        <Para>
          As we were iterated and created a common UI pattern for the platform,
          we noticed some other workflow quirks. We saw an opportunity to reduce
          some of these steps in one drawer and save the customer success team
          time making changes for customers.
        </Para>
        <Para>
          A common use case was changing the payment amount. This is a two step
          process because when changing a payment, a team member had to also
          update the debit schedule associated with it.
        </Para>
        <Para>
          Another common use case was editing the schedule of all payments and
          debits. This was also a two step process where all the numerical
          fields associated with a loan lived in the Edit Loan drawer, while all
          the scheduling fields lived in the Change Schedule drawer.
        </Para>
      </TextBox>
      <ImagesTwo
        images={[
          {
            src: "../static/finance/071.gif",
            caption: "Step 1: Edit Payment"
          },
          {
            src: "../static/finance/072.png",
            caption: "Step 1.5: Edit Payment Changes Debit Date"
          }
        ]}
      />
      <ImagesTwo
        images={[
          {
            src: "../static/finance/073.png",
            caption: "Step 2: Edit Debit"
          }
        ]}
      />
      <ImagesTwo
        images={[
          {
            src: "../static/finance/074.png",
            caption: "Step 3: Edit Loan Number"
          },
          {
            src: "../static/finance/075.gif",
            caption: "Step 4: Edit Loan Dates"
          }
        ]}
      />
    </Section>

    <Section bg={theme.colors.green[10]}>
      <TextBox center>
        <H6>Internal CS Tool</H6>
        <H2>Enhanced Edit Payment Flow</H2>
      </TextBox>
      <Image
        src="../static/finance/076.gif"
        caption="Edit Payment Calculator"
      />
      <TextBox center>
        <H6>Internal CS Tool</H6>
        <H2>Enhanced Change Schedule Flow</H2>
      </TextBox>
      <Image
        src="../static/finance/077.gif"
        caption="Change Schedule Calculator"
      />
    </Section>

    <Section>
      <TextBox>
        <H6>Internal CS Tool</H6>
        <H2>Results and Learnings</H2>
        <Para>
          Overall, most of the designs proposed were implemented into a new
          system and there was a 125% increase in the number of customers helped
          in a week with a 50% increase in customer support representatives.
          This occurred while we still continued to iterate and prioritize
          designs based on feedback from the team.
        </Para>
        <Para>
          And once my time was complete, the handoff process went smoothly—the
          designs fulfilled the requirement to scale with common UI components
          and patterns. Form fields and new edit pages could easily be added to
          the drawers / tabs. Information about loans or customers could be
          added to table columns.
        </Para>
        <Para>
          Developing prototypes directly in Javascript worked well for this
          particular project, but one frustration was how slightly slower it was
          to iterate. For future projects, I’d create a more robust sandbox area
          with React2Sketch or React2Figma to iterate UI designs and component
          ideas quicker.
        </Para>
      </TextBox>
    </Section>
  </Layout>
);
