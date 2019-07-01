import styled from "styled-components";
import { space, flexbox } from "styled-system";

const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

export default ({ children }) => (
  <Flex flexWrap="wrap" pt={[0, 3]} mx={[0, 5]} px={[0, 5]} mb={[3, 5]}>
    {children}
  </Flex>
);
