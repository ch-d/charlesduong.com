import styled from "styled-components";
import { space } from "styled-system";

import Social from "./social";

const Center = styled.div`
  ${space}
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.blue};
  font-size: 0.75rem;
  font-weight: 100;
`;

export default () => (
  <React.Fragment>
    <Center mt={4}>✌️</Center>
    <Center mb={2}>take care</Center>
    <Center pb={3}>
      <Social />
    </Center>
  </React.Fragment>
);
