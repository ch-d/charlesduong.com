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
  transform: translate(2.75rem, -6.5rem);
  // gradient
  position: relative;
  &:before, &:after {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
	}
  &:before {
    bottom: -4px;
    width: 4px;
    background-image: linear-gradient(${props => props.theme.colors.gradient.green}, ${props => props.theme.colors.gradient.purple});
  }
  &:after {
    left: -4px;
    height: 4px;
    background-image: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  }
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
    <Box width={3/4} ml={'4.165%'} mt={4}>
      <Grey>
        <Work>Some of my work</Work>
        <Gradient>

        </Gradient>
      </Grey>
    </Box>
  </Flex>
)
