import { injectGlobal, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               ubuntu,
               roboto, noto,
               'segoe ui', arial,
               sans-serif;
  }
`;

const theme = {
  colors: {
    black: 'black',
    blue: 'blue',
    grey: "grey"
  }
}

const Title = styled.h1`
	color: ${props => props.theme.colors.black};
  font-size: 2.25rem;
  letter-spacing: .1em;
  font-weight: 100;
  margin: 0;
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.colors.blue};
  font-size: 0.875rem;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: .25em;
  font-weight: 600;
`;

const Paragraph = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 1rem;
  line-height: 1.5;
`;

export default () => (
  <ThemeProvider theme={theme}>
  	<Flex>
      <Box width={1/3} ml='16.7%' py={4} my={4}>
        <Title>charles duong</Title>
        <SubTitle>PRODUCT DESIGNER</SubTitle>
      </Box>
      <Box width={1/3} ml='' py={3} my={4}>
        <Paragraph>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Paragraph>
      </Box>
  	</Flex>
  </ThemeProvider>
)
