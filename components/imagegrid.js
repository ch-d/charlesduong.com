import styled from 'styled-components';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-styled';

const Image = styled.img`
  max-width:100%;
  width:100%;
	border:0;
  ${space}
`;

export default ({ img1, alt1, img2, alt2 }) => (
  <Flex wrap mx={[2,2,0]}>
    <Box width={[1, 1/2]}>
      <Image src={img1} alt={alt1}/>
    </Box>
    <Box width={[1, 1/2]}>
      <Image src={img2} alt={alt2}/>
    </Box>
  </Flex>
)
