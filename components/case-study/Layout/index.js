import Link from "next/link";
import { ThemeProvider } from "styled-components";
import Head from "../../Head";
import GlobalStyle from "../../../theme/globalStyle";
import { theme } from "../../../theme";
import Social from "../../Social";
import List from "../../index/List";
import Footer from "../../Footer";
import {
  Main,
  SlantBg,
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
  categories,
  color
}) => (
  <div>
    <Head meta={title} titleCase={titleCase} desc={desc} />
    <GlobalStyle color={color} />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Main bg={theme.colors[color][10]}>
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
                <Divider w="1" color={color} />
                <Details>
                  {categories.map((item, i) =>
                    item.type === "label" ? (
                      <CategoryLabel key={i} color={color}>
                        {item.text}
                      </CategoryLabel>
                    ) : (
                      <CategoryItem key={i}>{item.text}</CategoryItem>
                    )
                  )}
                </Details>
              </Flex>
            </Flex>
          </Container>
        </Main>
        <SlantBg color={color}>
          <Container px={3}>{children}</Container>
        </SlantBg>
        <List />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </div>
);
