import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Social from './social';
import { space } from 'styled-system';

const Title = styled.h1`
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

export default () => (
	<Flex wrap mx={[2,2,0]}>
    <Box width={[1, 1/2, 1/3]} ml={['0','0','16.7%']} py={[1,3,4]} my={[4,2,4]} pl={[0,3,0]}>
      <Title>charles duong</Title>
      <SubTitle>PRODUCT DESIGNER</SubTitle>
    </Box>
    <Box width={[1, 1/2, 1/3]} py={[0,2,3]} my={[0,2,4]}>
      <Paragraph mb={[4,2]}>
        Hi, I’m Charles and I’m a product designer working on the world wide web. My designer side enjoys design systems, processes, tooling, and accessibility. My human side enjoys curiously tinkering, a just society, and spreading kindness in the world. But really, I’m more interesting if we get to kick it in person—let’s get to know each other, internet stranger!
      </Paragraph>
      <Social
        url='https://twitter.com/hicharlesd'
        site='twitter'
        color='1DA1F2'
      />
      <Social
        url='https://linkedin.com/in/charlesduong'
        site='linkedin'
        color='0077B5'
      />
      <Social
        url='https://github.com/ch-d'
        site='github'
        color='181717'
      />
      <Social
        url='mailto:charles@charlesduong.com'
        site='gmail'
        color='D14836'
      />
    </Box>
	</Flex>
)
