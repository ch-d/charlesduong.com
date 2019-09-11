import styled from "styled-components";
import { space, layout } from "styled-system";

export const Container = styled.div`
  ${layout}
  ${space}
`;

export default ({ children }) => (
  <Container maxWidth={640} mb={4} mx="auto">
    {children}
  </Container>
);
