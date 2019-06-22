import styled from "styled-components";
import { space, flexbox } from "styled-system";

const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

export default ({ children }) => (
  <Flex flexWrap="wrap" pt={[0, 2]} mx={[0, 4]} px={[0, 4]} mb={[2, 4]}>
    {children}
  </Flex>
);
