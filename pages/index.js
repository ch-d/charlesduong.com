import { ThemeProvider } from "styled-components";
import Heading from "../components/shared/heading";
import theme from "../theme";

export default () => (
  <div>
    <Heading titleCase="" />
    <ThemeProvider theme={theme}>
      <h1>Index</h1>
    </ThemeProvider>
  </div>
);
