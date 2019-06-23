import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";
import ImagesTwo from "../components/case-study/ImagesTwo";
import { H2, Para } from "../components/case-study/Typography";
import TextBox from "../components/case-study/TextBox";
import { Grid, GridImage } from "../components/case-study/ImagesGrid";
import Framer from "../components/case-study/Framer";

export default () => (
  <Layout
    title="Talent Sonar"
    titleCase="/talent-sonar"
    desc="Talent Sonar is a SaaS platform that addresses unconscious bias in the hiring process and provides a model for hiring teams to source and select the right fit for job requisitions."
    color="blue"
    introTitle="Addressing unconscious bias in the hiring process"
    subTitleLabel=""
    subTitleItem="Late 2017"
    intro={[
      "Talent Sonar provides a model for hiring teams to source and select the right fit for job requisitions. The platform facilitates identity-blind resume reviews to reduce bias when scanning resumes and structured interviews to reduce the tendency to screen candidates on short-term positive criteria. Overall, the application promotes quantifiable decision-making to find a long-term fit between companies and candidates.",
      "I worked with various stakeholders: product managers, developers, and marketing/sales team. We worked together to ship features on their mobile app, web platform, and marketing/sales collateral."
    ]}
    categories={[
      { type: "label", text: "Company" },
      { type: "item", text: "Talent Sonar" },
      { type: "label", text: "Team Members" },
      { type: "item", text: "Catrina Patton, Product Manager" },
      { type: "item", text: "Paige Panter, Marketing Manager" },
      { type: "item", text: "Liz Kofman, Sociologist" },
      { type: "item", text: "Daniel Kim, JS Web Developer" },
      { type: "item", text: "Reggie, Swift Mobile Developer" },
      { type: "label", text: "Projects" },
      { type: "item", text: "Mobile Interaction Design" },
      { type: "item", text: "Web Interaction Design" },
      { type: "item", text: "Marketing / Sales Assets" }
    ]}
  >
    {/* https://www.linkedin.com/pulse/theory-hiring-part-1-lou-adler/ */}
    <Image src="../static/talent-sonar/hero.png" />

    <TextBox>
      <H2>Mobile Resume Review</H2>
      <Para>
        When I first came onboard, the mobile app was in its early stages and
        only gave interviewers the ability to reference, take notes during, and
        score interviews. A missing function recruiters and hiring managers
        sought was the ability to review resumes on the app. The resume
        redaction flow for web did not involve too many steps, so we decided to
        explore what this feature would look like in a mobile context.
      </Para>
    </TextBox>
    <Image
      src="../static/talent-sonar/001.png"
      caption="Mobile Interview Planning Flow (1 of 2)"
    />

    <TextBox>
      <Para>
        Since resumes are commonly used in context of 8.5 x 11 piece of paper,
        we knew it would be a design challenge to fit everything into the
        context of a mobile device. We explored ideas like tinder-like card
        swiping, floating action buttons, and counting taps. We landed on a
        prototype with a toolbar that slid halfway over a resume so users could
        have both the survey and resume to reference when reviewing.
      </Para>
      <Para>
        After we tested our prototype, we found users needed proper affordances
        and swiping or tapping interactions confused them. Ultimately, we
        decided the value proposition was not strong enough, especially with the
        amount of engineering needed to be implemented. We icebox-ed the feature
        and would take a look at it again another date.
      </Para>
    </TextBox>
    <Framer src="https://framer.cloud/gRnDc/" frameborder="0" />

    <TextBox>
      <H2>Mobile Interview Planning</H2>
      <Para>
        A more important flow we wanted to push out was the interview planning
        flow. Through research, Talent Sonar found most interviewer and hiring
        manager personas often felt intimidated by the hiring process. They had
        very few interview experiences (at least from the hiring side) and
        mostly took advice from past experiences being interviewed. To help, we
        wanted to provide job templates (with pre-filled job criteria). From
        there, we could provide a structured path to create and maintain a job
        requisition.
      </Para>
      <Para>
        The flow consisted of a job that had candidates, interviewers, criteria
        (which had questions), and rounds (which included its own set of
        candidates, interviewers, criteria, and questions).
      </Para>
    </TextBox>
    <Image
      src="../static/talent-sonar/002.png"
      caption="Mobile Interview Planning Flow (1 of 2)"
    />
    <Image
      src="../static/talent-sonar/003.png"
      caption="Mobile Interview Planning Flow (2 of 2)"
    />

    <TextBox>
      <Para>
        In terms of the visual design, we wanted to keep simple iOS components.
        In doing so, we could ship the feature first, and iterate from there.
        Down the road, we want to explore a more dashboard-like view for jobs
        and tab bar navigation for candidates, criteria, and team member
        sections. We also hope to explore other interactions for lists like:
        swipe interactions for editing, drag and drop, and horizontal scrolling.
      </Para>
    </TextBox>
    <Image
      src="../static/talent-sonar/004-1.png"
      caption="Add New Job + Job Criteria Flow"
    />
    <Image
      src="../static/talent-sonar/004-2.png"
      caption="Job Candidates + Job Team Members"
    />
    <Image
      src="../static/talent-sonar/004-3.png"
      caption="Round Candidates + Round Team Members"
    />

    <TextBox>
      <H2>Component System</H2>
      <Para>
        While we worked on mobile features, opportunities to work on desktop
        designs also came up. Since they already had common components in their
        code, I created a design system within Sketch and collaborated with the
        Product Manager using Abstract. With a component system and version
        control for designs, we turned around mockups quicker and had a more
        efficient feedback loop when a feature story came in. This ensured more
        time focused on success metrics and usability rather than fiddle with
        aesthetics.
      </Para>
    </TextBox>
    <Image
      src="../static/talent-sonar/005.png"
      caption="Sketch Component System"
    />
    <ImagesTwo
      images={[
        {
          src: "../static/talent-sonar/006.png",
          caption: "Abstract Version Control (1 of 2)"
        },
        {
          src: "../static/talent-sonar/007.png",
          caption: "Abstract Version Control (2 of 2)"
        }
      ]}
    />

    <TextBox>
      <H2>Marketing / Sales</H2>
      <Para>
        Because I worked on the product, I had enough context to understand
        business goals and create informative illustrations for their marketing
        & sales teams. Blockframes became the main hero in the graphics and
        showcased certain features in development and within the current app.
        Other illustrations addressed a need to humanize the hiring process,
        while retaining context to the technology that powered it.
      </Para>
    </TextBox>
    <Grid>
      <GridImage
        column_l="1 / 2"
        row_l="1 / 2"
        column_m="3 / 4"
        row_m="1 / 2"
        column="2 / 3"
        row="1 / 2"
        image="url('../static/talent-sonar/008.png')"
      />
      <GridImage
        column_l="2 / 3"
        row_l="2 / 3"
        column_m="2 / 3"
        row_m="2 / 3"
        column="1 / 2"
        row="2 / 3"
        image="url('../static/talent-sonar/009.png')"
      />
      <GridImage
        column_l="3 / 4"
        row_l="1 / 2"
        column_m="3 / 4"
        row_m="3 / 4"
        column="2 / 3"
        row="2 / 3"
        image="url('../static/talent-sonar/010.png')"
      />
      <GridImage
        column_l="3 / 4"
        row_l="3 / 4"
        column_m="1 / 2"
        row_m="3 / 4"
        column="1 / 2"
        row="3 / 4"
        image="url('../static/talent-sonar/011.png')"
      />
      <GridImage
        column_l="4 / 5"
        row_l="2 / 3"
        column_m="2 / 3"
        row_m="4 / 5"
        column="2 / 3"
        row="3 / 4"
        image="url('../static/talent-sonar/012.png')"
      />
      <GridImage
        column_l="2 / 3"
        row_l="1 / 2"
        column_m="3 / 4"
        row_m="2 / 3"
        column="1 / 2"
        row="1 / 2"
        image="url('../static/talent-sonar/017.png')"
      />
      <GridImage
        column_l="4 / 5"
        row_l="3 / 4"
        column_m="1 / 2"
        row_m="4 / 5"
        column="2 / 3"
        row="5 / 6"
        image="url('../static/talent-sonar/018.png')"
      />
      <GridImage
        column_l="1 / 2"
        row_l="2 / 3"
        column_m="2 / 3"
        row_m="1 / 2"
        column="1 / 2"
        row="4 / 5"
        image="url('../static/talent-sonar/013.png')"
      />
      <GridImage
        column_l="2 / 3"
        row_l="3 / 4"
        column_m="1 / 2"
        row_m="2 / 3"
        column="2 / 3"
        row="4 / 5"
        image="url('../static/talent-sonar/014.png')"
      />
      <GridImage
        column_l="3 / 4"
        row_l="2 / 3"
        column_m="2 / 3"
        row_m="3 / 4"
        column="1 / 2"
        row="5 / 6"
        image="url('../static/talent-sonar/015.png')"
      />
    </Grid>
    <Image
      src="../static/talent-sonar/016.png"
      caption="Talent Sonar Platform Overview"
    />
  </Layout>
);
