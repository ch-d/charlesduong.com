import Link from "next/link";
import { ThemeProvider } from "styled-components";
import Head from "../../Head";
import GlobalStyle from "../../../theme/globalStyle";
import { theme } from "../../../theme";
import Social from "../../Social";
import List from "../../index/List";
import Footer from "../../Footer";
import {
  Container,
  Flex,
  Logo,
  Description,
  Details,
  Divider,
  CategoryLabel,
  CategoryItem,
  Title
} from "./style";
import { Para } from "../Typography";

export default ({
  children,
  title = "charles duong | product designer",
  titleCase,
  desc,
  introTitle,
  subTitleLabel,
  subTitleItem,
  intro,
  categories
}) => (
  <div>
    <Head meta={title} titleCase={titleCase} desc={desc} />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Container px={3}>
          <Flex alignItems="center" py={3}>
            <Link prefetch href="/">
              <Logo>charles duong</Logo>
            </Link>
            <Flex flex="1 1 auto" />
            <Social />
          </Flex>
          <Flex flexWrap="wrap" py={5}>
            <Description>
              <Title>{introTitle}</Title>
              {intro.map((text, i) => (
                <Para key={i}>{text}</Para>
              ))}
            </Description>
            <Flex>
              <Divider w="1" />
              <Details>
                {categories.map((item, i) =>
                  item.type === "label" ? (
                    <CategoryLabel key={i}>{item.text}</CategoryLabel>
                  ) : (
                    <CategoryItem key={i}>{item.text}</CategoryItem>
                  )
                )}
              </Details>
            </Flex>
          </Flex>
          {children}
        </Container>
        <List />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </div>
);
