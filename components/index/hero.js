import styled, { keyframes } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { space } from 'styled-system';
import Social from '../shared/social';

const Title = styled.h1`
  font-family: IBM Plex Sans;
	color: ${props => props.theme.colors.black};
  font-size: 2.25rem;
  letter-spacing: .1em;
  font-weight: 100;
  margin: 0;
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.colors.blue};
  font-size: 0.875rem;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: .25em;
  font-weight: 600;
`;

const Paragraph = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 1rem;
  line-height: 1.5;
	${space}
`;

const Pill = styled.span`
  background-color: #17a890;
  color: #fff;
  padding: .125rem .5rem;
  border-radius: .25rem;
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: .125rem;
  position: relative;
  top: -2px;
  box-shadow: 0 0 4px 2px rgba(23,168,144,.24);
`

const pulse = keyframes`
  0% {
      opacity: 1;
      transform: scale(.5);
  }
  80% {
      opacity: 0;
      transform: scale(1.5);
  }
  100% {
      opacity: 0;
      transform: scale(3);
  }
`;

const grow = keyframes`
  0% {
      transform: scale(.75);
  }
  50% {
      transform: scale(1);
  }
  100% {
      transform: scale(.75);
  }
`;

const Pulse = styled.span`
  display: inline-block;
  position: relative;
  top: -1px;
  margin-right: .5rem;
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  background: #fff;
  position: relative;
  animation: ${grow} 2s ease 0s infinite;
  &:after {
    content:"";
    display: block;
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    border: .125rem solid #fff;
    position: absolute;
    top: -.25rem;
    left: -.25rem;
    animation: ${pulse} 2s ease 0s infinite;
  }
`

export default () => (
	<Flex wrap mx={[2,2,0]}>
    <Box width={[1, 1/2, 1/3]} ml={['0','0','16.7%']} py={[1,3,4]} my={[4,2,4]} pl={[0,3,0]}>
      <Title>charles duong</Title>
      <SubTitle>PRODUCT DESIGNER</SubTitle>
    </Box>
    <Box width={[1, 1/2, 1/3]} py={[0,2,3]} my={[0,2,4]}>
      <Paragraph mb={[4,2]}>
        Hi, I'm a designer 👨‍💻 always up for tackling hard ethical, social problems. Empathy, words, and modular systems are my tools of choice throughout the design process. Continuously interested in making technology a little more human, accessible, and inclusive.
      </Paragraph>
      <Paragraph>
        Currently <Pill><Pulse />available</Pill> for full-time or contract opportunities. 
      </Paragraph>
      <Social />
    </Box>
	</Flex>
)