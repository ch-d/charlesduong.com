import Social from "../../shared/social";
import {
  Background,
  Container,
  TitleSection,
  Title,
  SubTitle,
  TextSection,
  Paragraph,
  Pill,
  Pulse
} from "./style";

export default () => (
  <Background>
    <Container>
      <TitleSection>
        <Title>charles duong</Title>
        <SubTitle>PRODUCT DESIGNER</SubTitle>
      </TitleSection>
      <TextSection>
        <Paragraph mb={4}>
          Hi, I'm a designer 👨‍💻 always up for tackling hard ethical, social
          problems. Empathy, words, and modular systems are my tools of choice
          throughout the design process. Continuously interested in making
          technology a little more human, accessible, and inclusive.
        </Paragraph>
        <Paragraph>
          Currently{" "}
          <Pill>
            <Pulse />
            available
          </Pill>{" "}
          for full-time or contract opportunities.
        </Paragraph>
        <Social />
      </TextSection>
    </Container>
  </Background>
);
