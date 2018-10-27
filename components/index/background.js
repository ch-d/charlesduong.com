import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Grey = styled.div`
  background-color: ${props => props.theme.colors.grey};
  width:100%;
  height:64rem;
`;

const Gradient = styled.div`
  width:100%;
  height: 100%;
  transform: translate(${props => props.space}rem, -${props => props.space}rem);
  z-index:-100;
  // gradient
  position: relative;
  // HACK ==> REMOVE HARDCODED HEIGHT & MARGIN 1200px TO-DO -------
  margin-bottom:-64rem;
  &:before, &:after {
    content: "";
    position: absolute;
    top: -${props => props.h}px;
    right: -${props => props.h}px;
	}
  &:before {
    bottom: -${props => props.h}px;
    width: ${props => props.h}px;
    background-image: linear-gradient(${props => props.theme.colors.gradient.green}, ${props => props.theme.colors.gradient.purple});
  }
  &:after {
    left: -${props => props.h}px;
    height: ${props => props.h}px;
    background-image: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  }
  @media (max-width: 40rem) {
      display:none
  };
`

const Divider = Box.extend`
  width:100%;
  height:${props => props.h}px;
  margin-left:20%;
  width:80%;
  background: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  @media (min-width: 40rem) {
      display:none
  };
`

const Work = styled.h1`
  font-family: IBM Plex Sans;
  font-size:3rem;
  letter-spacing: .1em;
  font-weight: 100;
  margin: 0;
  transform: translate(1rem,-50%);
  @media (max-width: 40rem) {
    transform: translate(0,-50%);
  };
  color: ${props => props.theme.colors.wash};
`;

export default ({children}) => (
  <Flex column mt={4}>
    <Divider h="1" mb={1}/>
    <Divider h="4" />
    <Box width={[1,3/4]} ml={[0,2,'4.165%']} mt={4}>
      <Grey>
        <Gradient h="4" space="4">
          <Gradient h="1" space="0.5"/>
        </Gradient>
        <Box px={[2,3,4]}>
          <Work>design work</Work>
          {children}
        </Box>
      </Grey>
    </Box>
  </Flex>
)
