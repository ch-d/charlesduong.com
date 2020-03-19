import {
  Background,
  Container,
  TitleSection,
  Title,
  Paragraph,
  Pulse,
  Anchor
} from "./style";

export default () => (
  <Background>
    <Container>
      <TitleSection>
        <Title>charles duong</Title>
        <Paragraph mt={3}>👨‍💻 Product Designer</Paragraph>
        {/* <Paragraph>
          <Pulse /> Available for full-time or contract opportunities.
        </Paragraph> */}
        <div>
          🔗{" "}
          {/* <Anchor
            href="https://twitter.com/charlesduong_"
            target="_blank"
            mr={2}
            color="#1DA1F2"
          >
            Twitter
          </Anchor> */}
          <Anchor
            href="https://linkedin.com/in/charlesduong"
            target="_blank"
            mr={2}
            color="#0077B5"
          >
            Linkedin
          </Anchor>
          <Anchor
            href="mailto:charles@charlesduong.com"
            target="_blank"
            ml={2}
            color="#D14836"
          >
            Email
          </Anchor>
        </div>
      </TitleSection>
    </Container>
  </Background>
);
