import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { space } from 'styled-system';

// Layout Components
import Social from './social';
import Image from './image';
import Card from './card';
import Footer from './footer';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

baseStyles();

const Container = Box.extend`
  max-width:60rem;
  margin-left:auto;
  margin-right:auto;
`

const Navbar = Flex.extend`
  align-items: center
`

const Logo = styled.a`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.25rem;
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
`

const Divider = Box.extend`
  width:100%;
  height:${props => props.h}px;
  background: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  margin-left: ${props => props.offset ? '20%' : ''};
  width: ${props => props.offset ? '80%' : ''};
`

const Work = styled.h1`
  font-size:3rem;
  letter-spacing: .1em;
  font-weight: 100;
  color: ${props => props.theme.colors.blue};
  opacity:0.6;
`;

export default ({ children, title = 'charles duong | product designer', disp1, disp2, disp3 }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <ThemeProvider theme={colors}>
      <div>
        <Container px={2}>
          <Navbar align-items='center' py={2}>
            <Logo href='/'>charles duong</Logo>
            <Box flex='1 1 auto' />
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
          </Navbar>
          <Flex wrap pt={2} mx={[0,4]} px={[0,4]}>
            <H1>{title}</H1>
            <Divider h="1"/>
          </Flex>
          { children }
          <Divider offset h="1" mt={[2,4]}/>
          <Divider offset h="4" mt={1} mb={[2,4]}/>
          <Work>other work</Work>
          <Card cs={1} disp={disp1}
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange/hero.png"
            url = "/lawyer-exchange"
          />
          <Card cs={1} disp={disp3}
            title = "BallotReady"
            sub1 = "Marketing Design"
            sub2 = "Data Visualizations"
            img = "../static/ballot-ready/hero.png"
            url = "/ballot-ready"
          />
          <Card cs={1} disp={disp2}
            title = "Luna Lights"
            sub1 = "User Interface Design"
            sub2 = "Data Visualization"
            img = "../static/luna-lights/hero.png"
            url = "/luna-lights"
          />
          <Footer />
        </Container>
      </div>
    </ThemeProvider>

  </div>
)
