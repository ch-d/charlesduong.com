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
  height:${props => props.h}px;
  background: linear-gradient(to bottom, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  margin-left: ${props => props.offset ? '20%' : ''};
  width: 1px;
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
          <Flex wrap py={4}>
            <Description>
              <H1>Providing Small / Solo Firms with BigLaw Resources</H1>
              <Para>The Lawyer Exchange is a new venture from the founder of VisaNow to answer the question: why are most people who need legal work not able to access affordable services? Through initial research, he determined the first step should be to help small / solo firm lawyers grow their practice by introducing them to freelance lawyers looking for meaningful legal experiences.</Para>
              <Para>The immediate goal was to facilitate the bringing together of these legal professionals in similar ways Thumbtack and UpWork provide service professionals to consumers. Our assumption was that the increased efficiency and flexibility for smaller firms should in turn decrease the average cost to access legal services.</Para>
              <Para>I was the first person to work full-time with the founder when it was only an idea in the Fall of 2016. Together, we collaborated with emerging lawyers and a development team to ship the initial MVP a year later.</Para>
            </Description>
            <Divider />
            <Details>
              <CategoryLabel>Company</CategoryLabel>
                <CategoryItem>{title}</CategoryItem>
              <CategoryLabel>Team Members</CategoryLabel>
                <CategoryItem>Robert Meltzer, CEO, Founder</CategoryItem>
                <CategoryItem>Britney McDonald, Counsel</CategoryItem>
                <CategoryItem>Josh Turk, Counsel</CategoryItem>
                <CategoryItem>Leo Fedorov, Lead Developer</CategoryItem>
              <CategoryLabel>Projects</CategoryLabel>
                <CategoryItem>User Researcher</CategoryItem>
                <CategoryItem>UI Designer</CategoryItem>
                <CategoryItem>Marketing Design</CategoryItem>
                <CategoryItem>Product Management</CategoryItem>
            </Details>
          </Flex>
          { children }
        </Container>
        <List />
        <Footer />
      </div>
    </ThemeProvider>
  </div>
)
