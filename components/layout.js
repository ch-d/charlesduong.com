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
  background: rgba(255, 255, 255, .95);
  align-items: center
`

const Logo = styled.a`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.25rem;
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
`

const Gradient = Box.extend`
  width:100%;
  height:${props => props.h}px;
  background: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  ${space}
`

const Work = styled.h1`
  font-size:3rem;
  letter-spacing: .1em;
  font-weight: 100;
  margin: 0;
  transform: translate(1rem,-50%);
  color: ${props => props.theme.colors.blue};
  opacity:0.6;
`;

export default ({ children, title = 'charles duong | product designer', img_url, disp1, disp2, disp3 }) => (
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
            <Gradient h="1"/>
          </Flex>
          { children }
          <Gradient h="4" my={[2,4]}/>
          <Work>other work</Work>
          <Card cs={1} disp={disp1}
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange/hero.png"
            url = "/lawyer-exchange"
          />
          <Card cs={1} disp={disp2}
            title = "User Interface Design"
            sub1 = "Occasion"
            sub2 = "Luna Lights"
            img = "../static/user-interface.jpg"
            url = "/user-interface"
          />
          <Card cs={1} disp={disp3}
            title = "Marketing Design"
            sub1 = "BallotReady"
            sub2 = "Conduit Labs"
            sub3 = "Women Tech Founders"
            img = "../static/marketing.jpg"
            url = "/marketing"
          />
        </Container>
      </div>
    </ThemeProvider>

  </div>
)
