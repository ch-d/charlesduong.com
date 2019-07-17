import styled from "styled-components";
import { space } from "styled-system";

export const Container = styled.div`
  max-width: 40rem;
  width: 100%;
  margin-bottom: 3rem;
  margin-left: ${props => (props.center ? "auto" : 0)};
  margin-right: ${props => (props.center ? "auto" : 0)};
  @media (max-width: 40rem) {
    padding-right: 0;
  }
  ${space}
`;

export default ({ children, center }) => (
  <Container center={center}>{children}</Container>
);
