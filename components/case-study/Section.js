import styled from "styled-components";
import { color, space, layout } from "styled-system";

const Section = styled.section`
  ${color}
  ${space}
  ${layout}
`;

export default ({ children, bg, py }) => (
  <Section bg={bg} py={py ? py : [4, 5]} width="100%">
    {children}
  </Section>
);
