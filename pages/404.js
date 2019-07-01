import styled, { ThemeProvider } from "styled-components";
import { space, flexbox } from "styled-system";
import Link from "next/link";
import Head from "../components/Head";
import GlobalStyle from "../theme/globalStyle";
import { theme } from "../theme";

import { H2 } from "../components/case-study/Typography";
import TextBox from "../components/case-study/TextBox";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

const Container = styled.div`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export default () => (
  <div>
    <Head titleCase="" />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Container px={2}>
          <Flex alignItems="center" py={2}>
            <Link prefetch href="/">
              <Logo>charles duong</Logo>
            </Link>
            <Flex flex="1 1 auto" />
            <Social />
          </Flex>
          <TextBox>
            <h1>😵 Page Not Found</h1>
            <H2>
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </H2>
            <Link prefetch href="/">
              <Logo>↩️ Back to charlesduong.com</Logo>
            </Link>
          </TextBox>
          <Flex flex="1 1 auto" />
          <Footer />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  </div>
);
