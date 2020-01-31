import { theme } from "../theme";

import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";
import ImagesTwo from "../components/case-study/ImagesTwo";
import {
  CardContainer,
  Card,
  CardTextContainer,
  CardTitle,
  CardContent
} from "../components/case-study/Cards";
import { H2, Para } from "../components/case-study/Typography";
import Container from "../components/case-study/Container";
import Section from "../components/case-study/Section";
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
    <Section>
      <TextBox>
        <H2>Legal Research</H2>
        <Para>
          In my preliminary research, I was surprised to find the idea of
          contract work was not widely adopted in the legal profession even
          though this concept had made its rounds in other industries. This
          would be one of the many quirks (and obstacles to success for our
          product) of the legal profession. Other quirks included:
        </Para>
      </TextBox>

      <Container>
        <CardContainer>
          <Card color="neutral" title="🎯">
            <CardTextContainer color="neutral">
              <CardTitle color="neutral">Formal Op. 08-451:</CardTitle>
              <CardContent color="neutral">
                <strong>
                  Lawyer’s Obligations When Outsourcing Legal and Nonlegal
                  Support Services
                </strong>
              </CardContent>
              <CardContent color="neutral">
                A lawyer may outsource legal or nonlegal support services
                provided the lawyer remains ultimately responsible for rendering
                competent legal services to the client under Model Rule 1.1. In
                complying with her Rule 1.1 obligations, a lawyer who engages
                lawyers or nonlawyers to provide outsourced legal or nonlegal
                services is required to comply with Rules 5.1 and 5.3. She
                should make reasonable efforts to ensure that the conduct of the
                lawyers or nonlawyers to whom tasks are outsourced is compatible
                with her own professional obligations as a lawyer with “direct
                supervisory authority” over them.
              </CardContent>
            </CardTextContainer>
          </Card>
          <Card color="neutral" title="📖">
            <CardTextContainer color="neutral">
              <CardTitle color="neutral">Formal Op. 08-451:</CardTitle>
              <CardContent color="neutral">
                <strong>
                  Lawyer’s Obligations When Outsourcing Legal and Nonlegal
                  Support Services
                </strong>
              </CardContent>
              <CardContent color="neutral">
                A lawyer may outsource legal or nonlegal support services
                provided the lawyer remains ultimately responsible for rendering
                competent legal services to the client under Model Rule 1.1. In
                complying with her Rule 1.1 obligations, a lawyer who engages
                lawyers or nonlawyers to provide outsourced legal or nonlegal
                services is required to comply with Rules 5.1 and 5.3. She
                should make reasonable efforts to ensure that the conduct of the
                lawyers or nonlawyers to whom tasks are outsourced is compatible
                with her own professional obligations as a lawyer with “direct
                supervisory authority” over them.
              </CardContent>
            </CardTextContainer>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card color="neutral" title="🎯">
            <CardTextContainer color="neutral">
              <CardTitle color="neutral">Formal Op. 08-451:</CardTitle>
              <CardContent color="neutral">
                <strong>
                  Lawyer’s Obligations When Outsourcing Legal and Nonlegal
                  Support Services
                </strong>
              </CardContent>
              <CardContent color="neutral">
                A lawyer may outsource legal or nonlegal support services
                provided the lawyer remains ultimately responsible for rendering
                competent legal services to the client under Model Rule 1.1. In
                complying with her Rule 1.1 obligations, a lawyer who engages
                lawyers or nonlawyers to provide outsourced legal or nonlegal
                services is required to comply with Rules 5.1 and 5.3. She
                should make reasonable efforts to ensure that the conduct of the
                lawyers or nonlawyers to whom tasks are outsourced is compatible
                with her own professional obligations as a lawyer with “direct
                supervisory authority” over them.
              </CardContent>
            </CardTextContainer>
          </Card>
        </CardContainer>
      </Container>
    </Section>

    <Section bg={theme.colors.neutral[10]}>
      <TextBox>
        <H2>User Research</H2>
        <Para>
          Before we fully jumped into development, I hacked a prototype using{" "}
          <strong>React</strong> and <strong>InVision</strong>. I wanted to
          ensure we tested our assumptions to identify important or unnecessary
          features before spending precious time developing them. I facilitated
          both remote user studies and in-person user studies with several legal
          professionals using <strong>Lookback</strong>. The exercise not only
          helped me understand some potential roadblocks with the UI, but also
          gave me some insight into the mental models lawyers use.
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
    </Section>

    <Section>
      <TextBox>
        <H2>User Personas</H2>
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
      </TextBox>
      <Container>
        <CardContainer>
          <Card color="neutral">
            <CardTextContainer color="neutral">
              <CardTitle color="neutral">Emerging Freelance Lawyer</CardTitle>
              <CardContent color="neutral">
                A lawyer may outsource legal or nonlegal support services
                provided the lawyer remains ultimately responsible for rendering
                competent legal services to the client under Model Rule 1.1.
              </CardContent>
            </CardTextContainer>
          </Card>
          <Card color="blue">
            <CardTextContainer color="blue">
              <CardTitle color="blue">Emerging Contracting Lawyer</CardTitle>
              <CardContent color="blue">
                A lawyer may outsource legal or nonlegal support services
                provided the lawyer remains ultimately responsible for rendering
                competent legal services to the client under Model Rule 1.1.
              </CardContent>
            </CardTextContainer>
          </Card>
          <Card color="neutral">
            <CardTextContainer color="neutral">
              <CardTitle color="neutral">Established Lawyer</CardTitle>
              <CardContent color="neutral">
                A lawyer may outsource legal or nonlegal support services
                provided the lawyer remains ultimately responsible for rendering
                competent legal services to the client under Model Rule 1.1.
              </CardContent>
            </CardTextContainer>
          </Card>
        </CardContainer>
      </Container>
    </Section>

    <Section bg={theme.colors.neutral[10]}>
      <TextBox>
        <H2>Profile and Project Onboarding</H2>
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
      </TextBox>
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
    </Section>

    <Section>
      <TextBox>
        <H2>Project Proposals and Messaging</H2>
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
      </TextBox>
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
    </Section>

    <Section bg={theme.colors.neutral[10]}>
      <TextBox>
        <H2>Increasing Internal Company Efficiency</H2>
        <Para>
          To work through designs quicker, I worked on a component style guide
          to assemble a cohesive visual language. Sketch’s extensive symbols
          function made it incredibly simple to switch the style of a component
          found on multiple pages, in one central location.
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
    </Section>

    <Section>
      <TextBox>
        <H2>Results</H2>
        <Para>
          Another important moment in the application was the interaction
          between a Hiring Lawyer and a Project Lawyer. With the Hiring Lawyer
          persona we had in mind, it was still important to keep the flow as
          simple as possible. We decided to be as hands off as possible when
          Hiring Lawyers posted a Project Brief and deciding on Project Lawyers
          to hire. On the other side, because the concept of an independent
          "freelance" lawyer is not widely adopted compared to "contract"
          lawyers working at a temp law firm, it was important to design
          empowerment to remind Project Lawyers to take initiative in the
          conversation.
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
    </Section>

    <Section>
      <TextBox>
        <H2>Further Considerations</H2>
        <Para>
          I admit when I began this project, I did not have much legal knowledge
          and looked to the law romantically as a means by which large sweeping
          change can be accomplished. Through legal research, I instead found an
          interest in the logic of the law and how it is a part of daily
          affairs—whether through business means or personal means like getting
          married or renting an apartment. It was much like design. You are
          given a problem, you applied research, and you bring it in to create
          an argument.
        </Para>
        <Para>
          I admit when I began this project, I did not have much legal knowledge
          and looked to the law romantically as a means by which large sweeping
          change can be accomplished. Through legal research, I instead found an
          interest in the logic of the law and how it is a part of daily
          affairs—whether through business means or personal means like getting
          married or renting an apartment. It was much like design. You are
          given a problem, you applied research, and you bring it in to create
          an argument.
        </Para>
      </TextBox>
    </Section>
  </Layout>
);
