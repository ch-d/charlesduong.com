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
  font-size: .75rem;
  opacity: .5;
  margin: 1.25rem auto 0 auto;
  text-transform: uppercase;
  letter-spacing: .15;
`

const CategoryItem = styled.p`
  font-size: .875rem;
  margin: .25rem auto;
  font-weight: 500
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
              <H1>Distributing BigLaw Resources to Solo / Small Legal Firms</H1>
              <Para>The Lawyer Exchange is a new venture from the founder of VisaNow to answer the question: why are most people who need legal work not able to access affordable services? Through his initial research, he determined the first step is a community to connect lawyers to other lawyers with contract project opportunities.</Para>
              <Para>Our immediate goal was to increase efficiency between established attorneys looking to grow their practice and emerging lawyers looking for meaningful legal experiences. Our assumption was a relationship between these parties should in turn decrease the cost to access legal services for consumers.</Para>
              <Para>I was the first person to work full-time with the founder. Together, we collaborated with outside emerging lawyers and a development team to ship the initial MVP.</Para>
            </Description>
            <Divider />
            <Details>
              <CategoryLabel>Company</CategoryLabel>
                <CategoryItem>{title}</CategoryItem>
              <CategoryLabel>Team Members</CategoryLabel>
                <CategoryItem>Robert Meltzer, CEO</CategoryItem>
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
