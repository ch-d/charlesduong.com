import styled from "styled-components";
import { space, layout } from "styled-system";

const Container = styled.div`
  ${layout}
  ${space}
`;

export default ({ children }) => (
  <Container maxWidth={640} mx="auto" mb={4} px={3}>
    {children}
  </Container>
);
