import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Main = styled.div`
  width:125%;
  height: 320px;
  background-color:#fff;
  box-shadow: 0 4px 8px 4px #CDCDCD;
  border-radius: 2px;
  margin-bottom:4rem
`;

const Fill = Flex.extend`
	height:100%;
  position:relative;
`;

const Info = Box.extend`
  position:absolute;
  bottom:2rem;

`

const Title = styled.h3`
  color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  letter-spacing: .1em;
  font-weight: 100;
`

const Sub = styled.h4`
  color: ${props => props.theme.colors.black};
  font-size: 0.875rem;
  letter-spacing: .1em;
  font-weight: 600;
`

const Image = styled.div`
  width:100%;
  height:100%;
  background-color:${props => props.theme.colors.gradient.purple};
`

export default () => (
  <Main>
    <Fill wrap p={2}>
      <Box width={1/3}>
        <Info pl={2}>
          <Title>Lawyer Exchange</Title>
          <Sub>Marketing+Development</Sub>
          <Sub>User Research</Sub>
          <Sub>Design System</Sub>
        </Info>
      </Box>
      <Box width={2/3}>
        <Image></Image>
      </Box>
    </Fill>
  </Main>
)
