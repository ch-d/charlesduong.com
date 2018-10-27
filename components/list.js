import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Background = styled.div`
  background-color: ${props => props.theme.colors.grey};
  width:100%;
  height:64rem;
  margin-top:16rem
`;

const Container = styled.div`
  margin: auto;
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex: 320px;
  padding: 1rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const Text = styled.div`
  margin-left: .5rem;
  width: 100%;
`;

const TitleText = styled.span`
  display: flex;
  align-items: baseline;
  flex: 1 1 auto;
`;

const Title = styled.h3`
  font-family: IBM Plex Sans;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: .1em;
  color: ${props => props.theme.colors.black};
  margin: 0;
`;

const Tag = styled.h5`
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: .1em;
  color: ${props => props.theme.colors.blue};
  margin: 0 .5rem;
  opacity: .5;
`;

const Subtitle = styled.h4`
  font-family: IBM Plex Sans;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: .1em;
  color: ${props => props.theme.colors.blue};
  margin: 0;
`;

const Cta = styled.a`
  flex: 1 1 auto;
  text-align: right;
`;

export default () => (
  <Background>
    <Container>
    <Card>
      <Image src="http://tachyons.io/img/logo.jpg" />
      <Text>
        <TitleText>
          <Title>Allie Bot</Title>
          <Tag>2018</Tag>
          <Cta>View Website</Cta>
        </TitleText>
        <Subtitle>Marketing Development</Subtitle>
      </Text>
    </Card>
    <Card>
      <Image></Image>
      <Text>
        <TitleText>
          <Title>Allie Bot</Title>
          <Tag>2018</Tag>
        </TitleText>
        <Subtitle>Marketing Development</Subtitle>
      </Text>
      <Cta>View Website</Cta>
    </Card>
    <Card>
      <Image></Image>
      <Text>
        <TitleText>
          <Title>Allie Bot</Title>
          <Tag>2018</Tag>
        </TitleText>
        <Subtitle>Marketing Development</Subtitle>
      </Text>
      <Cta>View Website</Cta>
    </Card>
    <Card>
      <Image></Image>
      <Text>
        <TitleText>
          <Title>Allie Bot</Title>
          <Tag>2018</Tag>
        </TitleText>
        <Subtitle>Marketing Development</Subtitle>
      </Text>
      <Cta>View Website</Cta>
    </Card>
    </Container>
  </Background>
)
