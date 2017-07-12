import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Grey = styled.div`
  background-color: ${props => props.theme.colors.grey};
  width:100%;
  height: 700px;
`;

const Gradient = styled.div`
  width:100%;
  height: 100%;
  border-top: 8px solid ${props => props.theme.colors.grey};
  border-right: 8px solid ${props => props.theme.colors.grey};
  transform: translate(4rem, -8rem);
`

const Work = styled.h1`
  font-size:3rem;
  letter-spacing: .1em;
  font-weight: 100;
  margin: 0;
  padding-left:2rem;
  transform: translateY(-50%);
`;

export default () => (
  <Flex wrap>
    <Box width={5/6} ml={'4.165%'} mt={4}>
      <Grey>
        <Work>Some of my work</Work>
        <Gradient>

        </Gradient>
      </Grey>
    </Box>
  </Flex>
)
