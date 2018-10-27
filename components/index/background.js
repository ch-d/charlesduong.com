import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Main = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 2rem auto;
`

const Grey = styled.div`
  background-color: ${props => props.theme.colors.grey};
  width: 100%;
  transform: translateX(-32px);
  margin-left: -32px;
`;

const Divider = Box.extend`
  width:100%;
  height:${props => props.h}px;
  margin-left:20%;
  width:80%;
  background: linear-gradient(to right, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
`

const Work = styled.h1`
  font-family: IBM Plex Sans;
  font-size:3rem;
  letter-spacing: .1em;
  font-weight: 100;
  margin: 0;
  transform: translateY(-50%);
  @media (max-width: 40rem) {
    transform: translate(0,-50%);
  };
  color: ${props => props.theme.colors.wash};
`;

const Container = styled.div`
  transform: translateX(64px);
  margin-right: -64px;
  width: 100%;
`

export default ({children}) => (
  <Flex column mt={4}>
    <Divider h="1" mb={1} />
    <Divider h="4" mb={4} />
    <Main>
      <Grey>
        <Container>
          <Work>design work</Work>
          {children}
        </Container>
      </Grey>
    </Main>
  </Flex>
)
