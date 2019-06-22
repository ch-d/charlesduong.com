import baseStyles from "../constants/baseStyles";
import colors from "../constants/colors";
import { ThemeProvider } from "styled-components";
import Heading from "../components/shared/heading";
import Hero from "../components/index/hero";
import Cardlist from "../components/index/cardlist";
import List from "../components/index/list";
import Footer from "../components/shared/footer";

baseStyles();

export default () => (
  <div>
    <Heading titleCase="" />
    <ThemeProvider theme={colors}>
      <div>
        <Hero />
        <Cardlist />
        <List isMain />
        <Footer />
      </div>
    </ThemeProvider>
  </div>
);
