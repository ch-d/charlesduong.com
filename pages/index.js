import { ThemeProvider } from "styled-components";
import Head from "../components/Head";
import GlobalStyle from "../theme/globalStyle";
import { theme } from "../theme";

import Hero from "../components/index/Hero";
import CardList from "../components/index/CardList";
import List from "../components/index/List";
import Footer from "../components/Footer";

export default () => (
  <div>
    <Head titleCase="" />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Hero />
        <CardList />
        <List isMain />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </div>
);
