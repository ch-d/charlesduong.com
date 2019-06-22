import Link from "next/link";
import styled from "styled-components";
import { space, flexbox } from "styled-system";

import { ThemeProvider } from "styled-components";
import Head from "../Head";
import GlobalStyle from "../../theme/globalStyle";
import { theme } from "../../theme";

import Social from "../Social";
import List from "../index/List";
import Footer from "../Footer";

const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

const Container = styled.div`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  ${space};
`;

const Logo = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.8;
  }
`;

const Description = styled.div`
  max-width: 35rem;
  width: 100%;
  padding-right: 2rem;
  @media (max-width: 40rem) {
    padding-right: 0;
  }
`;

const Details = styled.div`
  padding-left: 2rem;
  @media (max-width: 30rem) {
    padding-left: 1rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  width: ${props => props.w}px;
  height: 100%;
  height: ${props => props.h}px;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.gradient.purple},
    ${props => props.theme.colors.gradient.green}
  );
  margin-left: ${props => (props.offset ? "20%" : "")};
  ${space};
`;

const CategoryLabel = styled.h3`
  color: ${props => props.theme.colors.blue};
  font-size: 0.75rem;
  opacity: 0.8;
  margin: 1.35rem auto 0 auto;
  text-transform: uppercase;
  letter-spacing: 0.15;
`;

const CategoryItem = styled.p`
  font-size: 0.75rem;
  margin: 0.25rem auto;
  font-weight: 500;
  opacity: 0.8;
`;

const H1 = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.colors.black};
  font-size: 1.25rem;
`;

const Caption = styled.h6`
  color: ${props => props.theme.colors.black};
  font-size: 0.75rem;
  text-align: right;
  font-weight: 400;
  opacity: 0.8;
`;

export const Para = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 0;
  break-inside: avoid;
`;

export default ({
  children,
  title = "charles duong | product designer",
  date,
  titleCase,
  desc
}) => (
  <div>
    <Head meta={title} titleCase={titleCase} desc={desc} />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <div>
        <Container px={3}>
          <Flex alignItems="center" py={3}>
            <Link prefetch href="/">
              <Logo>charles duong</Logo>
            </Link>
            <Flex flex="1 1 auto" />
            <Social />
          </Flex>
          {children}
        </Container>
        <List />
        <Footer />
      </div>
    </ThemeProvider>
  </div>
);
