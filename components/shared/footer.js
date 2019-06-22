import styled from "styled-components";
import { space } from "styled-system";
import Social from "./social";

const Center = styled.div`
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.blue};
  font-size: 0.75rem;
  font-weight: 100;
  ${space}
`;

export default () => (
  <React.Fragment>
    <Center mt={5}>✌️</Center>
    <Center mb={3}>take care</Center>
    <Center pb={4}>
      <Social />
    </Center>
  </React.Fragment>
);
