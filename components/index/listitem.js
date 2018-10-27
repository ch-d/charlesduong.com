import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  display: flex;
  align-items: center;
  flex: 320px;
  padding: 1rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-image: url(${props => props.img});
`;

const Text = styled.div`
  // margin-left: .5rem;
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
  text-transform: lowercase;
  opacity: 0.5;
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
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: .1em;
  color: ${props => props.theme.colors.black};
  margin: 0;
  text-transform: uppercase;
`;

const Cta = styled.h5`
  flex: 1 1 auto;
  text-align: right;
  margin: 0;
  font-size: .75rem;
  color: ${props => props.theme.colors.blue};
  opacity: 0;
  margin-right: 16px;
  ${Card}:hover & {
    opacity: 1;
    margin-right: 0;
  }
`;

export default ({ title, tag, cta, subtitle, img, url }) => (
  <Link prefetch href={ url }>
    <Card>
      {/* <Image img={img} /> */}
      <Text>
        <TitleText>
          <Title>{ title }</Title>
          <Tag>{ tag }</Tag>
          <Cta>{ cta }</Cta>
        </TitleText>
        <Subtitle>{ subtitle }</Subtitle>
      </Text>
    </Card>
  </Link>
)