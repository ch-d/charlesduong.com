import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { space, width, fontSize, color } from 'styled-system';

baseStyles();

const Container = Box.extend`
  max-width:60rem;
  margin-left:auto;
  margin-right:auto;
`

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <ThemeProvider theme={colors}>
      <Container p={2}>
        { children }
      </Container>
    </ThemeProvider>
  </div>
)
