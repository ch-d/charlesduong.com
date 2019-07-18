import styled from "styled-components";
import { space } from "styled-system";

export const Container = styled.div`
  max-width: 40rem;
  width: 100%;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 40rem) {
    padding-right: 0;
  }
  ${space}
`;

export default ({ children, center }) => (
  <Container center={center}>{children}</Container>
);
