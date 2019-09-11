import { ThemeProvider } from "styled-components";
import Head from "../../Head";
import GlobalStyle from "../../../theme/globalStyle";
import { theme } from "../../../theme";
import Nav from "./Nav";
import Header from "./Header";
import List from "../../index/List";
import Footer from "../../Footer";
import ImageHero from "../ImageHero";
import Container from "../Container";
import { Main, SlantBg } from "./style";

export default ({
  children,
  title = "charles duong | product designer",
  titleCase,
  desc,
  image,
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
            <Nav />
            <Header
              introTitle={introTitle}
              subTitleLabel={subTitleLabel}
              subTitleItem={subTitleItem}
              intro={intro}
              categories={categories}
              color={color}
            />
          </Container>
        </Main>
        <SlantBg color={color}>
          {image && <ImageHero src={image} color={color} />}
          {children}
        </SlantBg>
        <List color={color} />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </div>
);
