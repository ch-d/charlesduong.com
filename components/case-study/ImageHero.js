import styled from "styled-components";
import { theme } from "../../theme";
import Container from "./Container";

const Gradient = styled.div`
  height: 0;
  padding-bottom: 56.25%;
  padding-top: 32px;
  background-image: linear-gradient(
    ${props => theme.colors[props.color][40]},
    ${props => theme.colors[props.color][60]}
  );
  border: 2px solid ${props => theme.colors[props.color][5]};
`;

const HeroImage = styled.div`
  padding-bottom: 56.25%;
  margin: 2px 32px;
  background-image: url(${props => props.src});
  background-size: cover;
`;

export default ({ src, color }) => (
  <Container>
    <Gradient color={color}>
      <HeroImage src={src} />
    </Gradient>
  </Container>
);
