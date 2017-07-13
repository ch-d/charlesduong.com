import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Grey = styled.div`
  background-color: ${props => props.theme.colors.grey};
  width:100%;
  height:1200px;
`;

const Gradient = styled.div`
  width:100%;
  height: 100%;
  transform: translate(4rem, -4rem);
  z-index:-100;
  // gradient
  position: relative;
  // HACK ==> REMOVE HARDCODED HEIGHT & MARGIN 1200px TO-DO -------
  margin-bottom:-1200px;
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
  transform: translate(1rem,-50%);
`;

export default ({children}) => (
  <Flex mt={4}>
    <Box width={[1,3/4]} ml={[0,2,'4.165%']} mt={4}>
      <Grey>
        <Gradient />
        <Box px={[2,3,4]}>
          <Work>design work</Work>
          {children}
        </Box>
      </Grey>
    </Box>
  </Flex>
)
