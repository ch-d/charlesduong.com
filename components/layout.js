import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { space } from 'styled-system';
import { Twitter, Linkedin, Github, Mail } from 'react-feather'

// Layout Components
import Heading from './heading';
import Social from './social';
import Image from './image';
import Card from './card';
import Footer from './footer';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import { H1, H2, Para } from '../constants/typography';

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
  font-family: quicksand;
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
            <Link prefetch href='/work'>
              <Logo>charles duong</Logo>
            </Link>
            <Box flex='1 1 auto' />
            <Box>
              <Icolink href='https://twitter.com/hicharlesd' target='_blank' mr={1} color="#1DA1F2">
                <Twitter color="#7f959d" size={24} />
              </Icolink>
              <Icolink href='https://linkedin.com/in/charlesduong' target='_blank' mx={1} color="#0077B5">
                <Linkedin color="#7f959d" size={24} />
              </Icolink>
              <Icolink href='https://github.com/ch-d' target='_blank' mx={1} color="#181717">
                <Github color="#7f959d" size={24} />
              </Icolink>
              <Icolink href='mailto:charles@charlesduong.com' target='_blank' mx={1} color="#D14836">
                <Mail color="#7f959d" size={24} />
              </Icolink>
            </Box>
            {/* <Social
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
            /> */}
          </Flex>
          <Flex wrap pt={2} mx={[0,4]} px={[0,4]}>
            <H1>{title}</H1>
            <Divider h="1" hideDivider={hideDivider}/>
            <H1 style={{'fontSize': '1rem'}}>{date}</H1>
          </Flex>
          { children }
          <Divider offset h="1" mt={[2,4]}/>
          <Divider offset h="4" mt={1} mb={[2,4]}/>
          <Work>other work</Work>
          <Card cs={1} disp={disp1}
            title = "Talent Sonar"
            sub1 = "Mobile Interaction Design"
            sub2 = "Design System"
            sub3 = "Marketing Design"
            img = "../static/talent-sonar/hero.png"
            url = "/talent-sonar"
            date = "Late 2017"
          />
          <Card cs={1} disp={disp2}
            title = "Lawyer Exchange"
            sub1 = "Marketing & Development"
            sub2 = "User Research"
            sub3 = "Design System"
            img = "../static/lawyer-exchange/hero.png"
            url = "/lawyer-exchange"
            date = "Late 2016 &ndash; Early 2017"
          />
          <Card cs={1} disp={disp3}
            title = "Koeo Travel"
            sub1 = "Front-End Development"
            sub2 = "User Research"
            img = "../static/koeo/hero.png"
            url = "/koeo"
            date = "Late 2017 &ndash;"
          />
          <Card cs={1} disp={disp4}
            title = "Luna Lights"
            sub1 = "User Interface Design"
            sub2 = "Data Visualization"
            img = "../static/luna-lights/hero.png"
            url = "/luna-lights"
            date = "Early 2016"
          />
          <Card cs={1} disp={disp5}
            title = "BallotReady"
            sub1 = "Marketing Design"
            sub2 = "Data Visualizations"
            img = "../static/ballot-ready/hero.png"
            url = "/ballot-ready"
            date = "Late 2016"
          />
          <Footer />
        </Container>
      </div>
    </ThemeProvider>

  </div>
)
