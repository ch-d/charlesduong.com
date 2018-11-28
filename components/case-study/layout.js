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
  color: ${props => props.theme.colors.black};
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
  height: ${props => props.h}px;
  background: linear-gradient(to bottom, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  margin-left: ${props => props.offset ? '20%' : ''};
  width: ${props => props.w}px;
`

const Description = styled.div`
  max-width: 35rem;
  width: 100%;
  padding-right: 2rem;
`

const Details = styled.div`
  padding-left: 2rem;
`

const CategoryLabel = styled.h3`
  color: ${props => props.theme.colors.blue};
  font-size: .75rem;
  opacity: .8;
  margin: 1.35rem auto 0 auto;
  text-transform: uppercase;
  letter-spacing: .15;
`

const CategoryItem = styled.p`
  font-size: .75rem;
  margin: .25rem auto;
  font-weight: 500;
  opacity: 0.8;
`

export default ({ children, title = 'charles duong | product designer', date, titleCase, desc }) => (
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
          { children }
        </Container>
        <List />
        <Footer />
      </div>
    </ThemeProvider>
  </div>
)

export {
  Description, 
  Details, 
  Divider,
  CategoryLabel,
  CategoryItem
}
