import styled from "styled-components";
import { space } from "styled-system";
import { Flex, Box } from "grid-styled";
import { Caption } from "../../constants/typography";

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  border: 0;
  @media (max-width: 40rem) {
    max-width: none;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
  ${space};
`;

const Cap = Caption.extend`
  ${space};
`;

export default ({ img1, cap1, img2, cap2 }) => (
  <Flex wrap align="flex-end" mb={[2, 0]}>
    <Box width={[1, 1 / 2]} pr={[0, 2]} mb={[2, 2, 0]}>
      <Image src={img1} alt={cap1 + " image not found 😵 "} title={cap1} />
      <Cap mt={[1, 0]} mb={[2, 3]}>
        {cap1}
      </Cap>
    </Box>
    <Box width={[1, 1 / 2]} pl={[0, 2]}>
      <Image src={img2} alt={cap2 + " image not found 😵 "} title={cap2} />
      <Cap mt={[1, 0]} mb={[2, 3]}>
        {cap2}
      </Cap>
    </Box>
  </Flex>
);
