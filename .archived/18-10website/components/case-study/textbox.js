import { Flex } from "grid-styled";

export default ({ children }) => (
  <Flex wrap pt={[0, 2]} mx={[0, 4]} px={[0, 4]} mb={[2, 4]}>
    {children}
  </Flex>
);
