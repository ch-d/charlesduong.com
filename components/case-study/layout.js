import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { space } from 'styled-system';

// Layout Components
import Heading from '../shared/heading';
import Social from '../shared/social';
import List from '../index/list';
import Footer from '../shared/footer';

// Layout constants
import baseStyles from '../../constants/baseStyles';
import colors from '../../constants/colors';
import { H1, H2, Para } from '../../constants/typography';

baseStyles();

const Container = Box.extend`
  max-width:60rem;
  margin-left:auto;
  margin-right:auto;
`

const Logo = styled.a`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.25rem;
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  &:hover,
  &:focus {
    opacity: .5;
  };
  &:active {
    opacity: .8;
  }
`

const Divider = Box.extend`
  width:100%;
  height:${props => props.h}px;
  background: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  margin-left: ${props => props.offset ? '20%' : ''};
  width: ${props => props.offset ? '80%' : ''};
  display: ${props => props.hideDivider ? 'none' : ''}
`

const Work = styled.h1`
  font-family: IBM Plex Sans;
  font-size:3rem;
  letter-spacing: .1em;
  font-weight: 100;
  color: ${props => props.theme.colors.blue};
  opacity:0.6;
`;

const Icolink= styled.a`
  ${space}
  &:hover {
    border-bottom: 2px solid ${props => props.color}
  }
  &:hover svg {
    stroke:${props => props.color}
  };
`

export default ({ children, title = 'charles duong | product designer', date, titleCase, desc, disp1, disp2, disp3, disp4, disp5, hideDivider }) => (
  <div>
    <Heading meta={title} titleCase={titleCase} desc={desc}/>
    <ThemeProvider theme={colors}>
      <div>
        <Container px={2}>
          <Flex alignItems='center' py={2}>
            <Link prefetch href='/'>
              <Logo>charles duong</Logo>
            </Link>
            <Box flex='1 1 auto' />
            <Social />
          </Flex>
          <Flex wrap pt={2} mx={[0,4]} px={[0,4]}>
            <H1>{title}</H1>
            <Divider h="1" hideDivider={hideDivider}/>
            <H1 style={{'fontSize': '1rem'}}>{date}</H1>
          </Flex>
          { children }
        </Container>
        <List />
        <Footer />
      </div>
    </ThemeProvider>
  </div>
)
