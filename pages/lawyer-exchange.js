import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";
import ImagesTwo from "../components/case-study/ImagesTwo";
import { H2, Para } from "../components/case-study/Typography";
import TextBox from "../components/case-study/TextBox";
import TwoColumn from "../components/case-study/TextTwoColumn";
import Carousel from "../components/case-study/Carousel";

export default () => (
  <Layout
    title="Lawyer Exchange"
    titleCase="/lawyer-exchange"
    desc="The Lawyer Exchange is a new venture from the founder of VisaNow set out to answer the question: why are most people who need legal work not able to access affordable services?"
    image="../static/lawyer-exchange/hero.png"
    color="neutral"
    introTitle="Providing Small / Solo Firms with BigLaw Resources"
    subTitleLabel="2016 – 2018"
    subTitleItem=""
    intro={[
      "The Lawyer Exchange is a new venture from the founder of VisaNow to answer the question: why are most people who need legal work not able to access affordable services? Through initial research, he determined the first step should be to help small / solo firm lawyers grow their practice by introducing them to freelance lawyers looking for meaningful legal experiences.",
      "The immediate goal was to facilitate the bringing together of these legal professionals in similar ways Thumbtack and UpWork provide service professionals to consumers. Our assumption was that the increased efficiency and flexibility for smaller firms should in turn decrease the average cost to access legal services.",
      "I was the first person to work full-time with the founder when it was only an idea in the Fall of 2016. Together, we collaborated with emerging lawyers and a development team to ship the initial MVP a year later."
    ]}
    categories={[
      { type: "label", text: "Company" },
      { type: "item", text: "Lawyer Exchange" },
      { type: "label", text: "Team Members" },
      { type: "item", text: "Robert, CEO; Founder" },
      { type: "item", text: "Britney, Counsel" },
      { type: "item", text: "Josh, Counsel" },
      { type: "item", text: "Leo, Lead Developer" },
      { type: "label", text: "Projects" },
      { type: "item", text: "UI Design" },
      { type: "item", text: "User Research" },
      { type: "item", text: "Product Management" },
      { type: "item", text: "Marketing Design" }
    ]}
  >
    <TextBox>
      <H2>Marketing Page</H2>
      <Para>
        Although the idea of contract work has made its rounds in other
        industries, this concept was not widely adopted in the legal profession.
        Even though there were formal opinions and{" "}
        <a href="https://www.americanbar.org/content/dam/aba/administrative/ethics_2020/20120508_ethics_20_20_final_resolution_and_report_outsourcing_posting.authcheckdam.pdf">
          resolutions
        </a>
        , not many lawyers knew:{" "}
        <strong>
          “...by reducing the cost of legal services, outsourcing can improve
          access to justice by making legal services more affordable.”
        </strong>{" "}
        To test if there was actually demand for a platform like this we
        developed a marketing site that captured emails from potential lawyers.
        We hoped to engage professional attorneys with resources to help them
        understand how this could be a feasible and ethical model to work
        together.
      </Para>
    </TextBox>
    <Image
      src="../static/lawyer-exchange/001.gif"
      caption="Responsive Website Development"
    />

    <TextBox>
      <H2>Discovery Phase</H2>
      <Para>
        Once we found proficient need for the product, we worked through a high
        level flow of what the app would look like. We defined our users as
        established Solo / Small Firm Lawyers and emerging Recent Law School
        Grads. It became our main priority to provide as much of a frictionless
        experience for the established lawyers who are pressed for time, and an
        extensive toolkit for the emerging lawyers looking to grow their career.
        With a high-level flow established, I then focused on wireframing key
        moments in the flow before diving into <strong>Sketch</strong> for
        higher fidelity mockups.
      </Para>
    </TextBox>
    <Image
      src="../static/lawyer-exchange/006.png"
      caption="Early Whiteboard Brainstorm"
    />
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/018.png",
          caption: "Wireframe Exploration (1 of 2"
        },
        {
          src: "../static/lawyer-exchange/019.png",
          caption: "Wireframe Exploration (2 of 2)"
        }
      ]}
    />

    <TextBox>
      <H2>User Research</H2>
      <Para>
        Before we fully jumped into development, I hacked a prototype using{" "}
        <strong>React</strong> and <strong>InVision</strong>. I wanted to ensure
        we tested our assumptions to identify important or unnecessary features
        before spending precious time developing them. I facilitated both remote
        user studies and in-person user studies with several legal professionals
        using <strong>Lookback</strong>. The exercise not only helped me
        understand some potential roadblocks with the UI, but also gave me some
        insight into the mental models lawyers use.
      </Para>
    </TextBox>
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/007.png",
          caption: "Proposal Screen v1"
        },
        {
          src: "../static/lawyer-exchange/008.png",
          caption: "Profile Wizard Screen v1"
        }
      ]}
    />
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/009.png",
          caption: "In-Person User Testing"
        },
        {
          src: "../static/lawyer-exchange/010.png",
          caption: "Remote User Testing"
        }
      ]}
    />

    <TextBox>
      <H2>Component Style Guide</H2>
      <Para>
        To work through designs quicker, I worked on a component style guide to
        assemble a cohesive visual language. Sketch’s extensive symbols function
        made it incredibly simple to switch the style of a component found on
        multiple pages, in one central location.
      </Para>
      {/* Joel Buekeleman "https://www.youtube.com/watch?v=YrtPH9OWtPE" */}
      {/* Ryan Singer https://signalvnoise.com/posts/1926-a-shorthand-for-designing-ui-flows */}
      <Para>
        I also used Sketch’s symbols to create information architecture maps of
        the product to ensure we were all on the same page. These maps of
        different moments within the UI weren't meant to be a source of truth,
        rather used to communicate interactions on a page and unite the
        developers and myself around a more common language.
      </Para>
    </TextBox>
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/002.png",
          caption: "Style Guide v1"
        },
        {
          src: "../static/lawyer-exchange/003.png",
          caption: "Style Guide v2"
        }
      ]}
    />
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/004.png",
          caption: "Sign Up Flow"
        },
        {
          src: "../static/lawyer-exchange/005.png",
          caption: "Settings Flow"
        }
      ]}
    />

    <TextBox>
      <H2>Design Revisions - Profile</H2>
      <Para>
        An important arc for the application was the profile page flow. For
        Hiring Lawyers, it was important to identify quality Project Lawyers at
        a quick glance. For Project Lawyers, it was important for us to help
        guide them towards making a quality profile. Based on research from the{" "}
        <a href="http://iaals.du.edu/foundations/reports/whole-lawyer-and-character-quotient/foundations-practice">
          IAALS Foundations for Practice
        </a>{" "}
        study, we wanted to highlight a lawyer’s character over superficial
        qualities like GPA and class rank. By identifying a lawyer’s "Character
        Quotient", it was our hope to facilitate longer lasting relationships
        between both parties.
      </Para>
    </TextBox>
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/012.png",
          caption: "Profile Wizard"
        },
        {
          src: "../static/lawyer-exchange/011.png",
          caption: "Profile Editor"
        }
      ]}
    />
    <Image
      src="../static/lawyer-exchange/013.gif"
      caption="Project Lawyer Profile"
    />

    <TextBox>
      <H2>Design Revisions - Project Briefs</H2>
      <Para>
        Another important moment in the application was the interaction between
        a Hiring Lawyer and a Project Lawyer. With the Hiring Lawyer persona we
        had in mind, it was still important to keep the flow as simple as
        possible. We decided to be as hands off as possible when Hiring Lawyers
        posted a Project Brief and deciding on Project Lawyers to hire. On the
        other side, because the concept of an independent "freelance" lawyer is
        not widely adopted compared to "contract" lawyers working at a temp law
        firm, it was important to design empowerment to remind Project Lawyers
        to take initiative in the conversation.
      </Para>
    </TextBox>
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/015.png",
          caption: "Hiring Lawyer Project Brief"
        },
        {
          src: "./static/lawyer-exchange/016.png",
          caption: "Project Lawyer Available Projects"
        }
      ]}
    />
    <ImagesTwo
      images={[
        {
          src: "../static/lawyer-exchange/017.png",
          caption: "Project Lawyer Send Proposal"
        },
        {
          src: "../static/lawyer-exchange/014.png",
          caption: "Hiring Lawyer Select Proposal"
        }
      ]}
    />
  </Layout>
);
