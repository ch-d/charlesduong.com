import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

// Layout Components
import Social from './social';
import Image from './image';

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
  height:2px;
  background: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green})
`

export default ({ children, title = 'charles duong | product designer', img_url }) => (
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
          <Image img ={img_url} />
          <Flex wrap pt={2} mx={[0,4]} px={[0,4]}>
            <H1>{title}</H1>
            <Gradient />
          </Flex>
          { children }
        </Container>
      </div>
    </ThemeProvider>
  </div>
)
