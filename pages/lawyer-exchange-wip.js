import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";
import ImagesTwo from "../components/case-study/ImagesTwo";
import { H2, Para } from "../components/case-study/Typography";
import Container from "../components/case-study/Container";
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
    <Container>
      <H2>Legal Research</H2>
      <TwoColumn>
        <Para>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta
          felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum.
        </Para>
        <Para>
          Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
          consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </Para>
        <Para>
          Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
          tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere
          consectetur est at lobortis. Etiam porta sem malesuada magna mollis
          euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Donec sed odio dui.
        </Para>
        <Para>
          Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at
          lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </Para>
      </TwoColumn>
    </Container>

    <Image
      src="../static/lawyer-exchange/006.png"
      caption="Early Whiteboard Brainstorm"
    />

    <Container>
      <H2>User Research</H2>
      <TwoColumn>
        <Para>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta
          felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum.
        </Para>
        <Para>
          Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
          consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </Para>
        <Para>
          Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
          tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere
          consectetur est at lobortis. Etiam porta sem malesuada magna mollis
          euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Donec sed odio dui.
        </Para>
        <Para>
          Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at
          lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </Para>
      </TwoColumn>
      <Image
        src="../static/lawyer-exchange/001.gif"
        caption="Early Whiteboard Brainstorm"
      />
    </Container>

    <Container>
      <H2>Profile and Project Onboarding</H2>
      <TwoColumn>
        <Para>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta
          felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum.
        </Para>
        <Para>
          Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
          consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </Para>
        <Para>
          Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
          tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere
          consectetur est at lobortis. Etiam porta sem malesuada magna mollis
          euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Donec sed odio dui.
        </Para>
        <Para>
          Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at
          lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </Para>
      </TwoColumn>
    </Container>

    <Carousel
      color="green"
      items={[
        {
          src: "../static/lawyer-exchange/013.gif",
          text: "Project Lawyer Profile"
        },
        {
          src: "../static/lawyer-exchange/013.gif",
          text: "Wireframe Exploration (1 of 2)"
        },
        {
          src: "../static/lawyer-exchange/013.gif",
          text: "Wireframe Exploration (2 of 2)"
        },
        {
          src: "../static/lawyer-exchange/013.gif",
          text: "Proposal Screen v1"
        },
        {
          src: "../static/lawyer-exchange/013.gif",
          text: "Profile Wizard Screen v1"
        },
        {
          src: "../static/lawyer-exchange/013.gif",
          text: "In-Person User Testing"
        },
        {
          src: "../static/lawyer-exchange/013.gif",
          text: "Remote User Testing"
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

    <Container>
      <H2>Project Proposals and Messaging</H2>
      <TwoColumn>
        <Para>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta
          felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum.
        </Para>
        <Para>
          Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
          consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </Para>
        <Para>
          Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
          tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere
          consectetur est at lobortis. Etiam porta sem malesuada magna mollis
          euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Donec sed odio dui.
        </Para>
        <Para>
          Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at
          lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </Para>
      </TwoColumn>
    </Container>
    <Image
      src="../static/lawyer-exchange/013.gif"
      caption="Project Lawyer Profile"
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
      <H2>Increasing Internal Company Efficiency</H2>
      <Para>
        To work through designs quicker, I worked on a component style guide to
        assemble a cohesive visual language. Sketch’s extensive symbols function
        made it incredibly simple to switch the style of a component found on
        multiple pages, in one central location.
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

    <TextBox>
      <H2>Results</H2>
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
          src: "../static/lawyer-exchange/016.png",
          caption: "Project Lawyer Available Projects"
        }
      ]}
    />

    <TextBox>
      <H2>Further Considerations</H2>
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
