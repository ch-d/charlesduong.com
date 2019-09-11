import styled from "styled-components";
import { space, layout } from "styled-system";

const Container = styled.div`
  ${layout}
  ${space}
`;

export default ({ children }) => (
  <Container maxWidth={640} mb={4} mx="auto" px={3}>
    {children}
  </Container>
);
