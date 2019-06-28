import { Box, Divider, Main, Grey, Container, Title } from "./style";

export default ({ children, list, title, color }) => (
  <Box mt={5}>
    <Divider h="1" mb={2} list={list} color={color} />
    <Divider h="4" mb={6} list={list} color={color} />
    <Main>
      <Grey list={list} color={color}>
        <Container list={list}>
          <Title>{title}</Title>
          {children}
        </Container>
      </Grey>
    </Main>
  </Box>
);
