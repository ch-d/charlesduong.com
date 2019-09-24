import styled from "styled-components";
import { space, layout, typography } from "styled-system";

const Container = styled.div`
  ${layout}
  ${space}
  ${typography}
`;

export default ({ children, center }) => (
  <Container
    maxWidth={640}
    mx="auto"
    mb={4}
    px={3}
    textAlign={center && "center"}
  >
    {children}
  </Container>
);
