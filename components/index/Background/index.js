import { Box, Divider, Main, Grey, Container, Title } from "./style";

export default ({ children, list, title }) => (
  <Box mt={5}>
    <Divider h="1" mb={2} list={list} />
    <Divider h="4" mb={6} list={list} />
    <Main>
      <Grey list={list}>
        <Container list={list}>
          <Title>{title}</Title>
          {children}
        </Container>
      </Grey>
    </Main>
  </Box>
);
