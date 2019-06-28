import styled from "styled-components";
import { space } from "styled-system";
import Social from "./Social";

const Center = styled.div`
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.neutral[500]};
  font-size: 0.75rem;
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
