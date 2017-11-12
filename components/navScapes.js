import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { space } from 'styled-system';

// Layout Components
import Heading from './heading';
import Social from './social';
import Image from './image';
import Card from './card';
import Footer from './footer';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

baseStyles();

const Navigation = Box.extend`
  width:100%;
  background-color: #fff;
  opacity:1;
  transition:all .5s;
  position:fixed;
  top:0;
  z-index:100;
`

const Container = Box.extend`
  max-width:60rem;
  margin-left:auto;
  margin-right:auto;
  text-align: center;
`

const Logo = styled.a`
  font-size: 1rem;
  font-weight: 400;
  margin: 0 2rem;
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
  @media (max-width: 40rem) {
      margin: 0 1rem;
  };
  @media (max-width: 20rem) {
      margin: 0 0.5rem;
  };
`

export default () => (
  <ThemeProvider theme={colors}>
    <Navigation>
      <Container px={2} py={2}>
        <Link prefetch href=''>
          <Logo>2017</Logo>
        </Link>
        <Link prefetch href=''>
          <Logo>2016</Logo>
        </Link>
        <Link prefetch href=''>
          <Logo>2015</Logo>
        </Link>
        <Link prefetch href=''>
          <Logo>2014</Logo>
        </Link>
        <Link prefetch href=''>
          <Logo>2013</Logo>
        </Link>
      </Container>
    </Navigation>
  </ThemeProvider>
)
