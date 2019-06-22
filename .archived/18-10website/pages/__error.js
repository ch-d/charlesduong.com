import Link from "next/link";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { space } from "styled-system";

// Layout Components
import Heading from "../components/shared/heading";
import Social from "../components/shared/social";
import Footer from "../components/shared/footer";
import Textbox from "../components/case-study/textbox";

// Layout constants
import baseStyles from "../constants/baseStyles";
import colors from "../constants/colors";
import { H1, H2, Para } from "../constants/typography";

baseStyles();

const Container = Box.extend`
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

export default ({
  children,
  title = "charles duong | product designer",
  date,
  titleCase,
  desc
}) => (
  <div>
    <Heading meta={title} titleCase={titleCase} desc={desc} />
    <ThemeProvider theme={colors}>
      <div>
        <Container px={2}>
          <Textbox>
            <H1>😵 Page Not Found</H1>
            <H2>
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </H2>
          </Textbox>
        </Container>
      </div>
    </ThemeProvider>
  </div>
);
