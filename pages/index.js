import { ThemeProvider } from "styled-components";
import Heading from "../components/shared/heading";
import GlobalStyle from "../theme/globalStyle";
import theme from "../theme";

import Hero from "../components/index/hero";
import Cardlist from "../components/index/cardlist";
import List from "../components/index/list";
import Footer from "../components/shared/footer";

export default () => (
  <div>
    <Heading titleCase="" />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Hero />
        <Cardlist />
        <List isMain />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </div>
);
