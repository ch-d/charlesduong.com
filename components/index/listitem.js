import styled from "styled-components";
import Link from "next/link";

const Card = styled.button`
  // remove default button styles
  font-family: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;

  // card styles
  display: flex;
  align-items: center;
  flex: 320px;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.colors.grey};
  @media (min-width: 40rem) {
    border-bottom: none;
  }
`;

const Text = styled.div`
  width: 100%;
`;

const MobileBottom = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  order: 2;
  @media (min-width: 40rem) {
    order: 1;
  }
`;

const TitleText = styled.span`
  display: flex;
  align-items: baseline;
  flex: 1 1 auto;
  flex-direction: column;
  @media (min-width: 40rem) {
    flex-direction: row;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.black};
  margin: 0;
  text-transform: lowercase;
  flex-shrink: 0;
`;

const Tag = styled.h5`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.blue};
  margin: 0 0.5rem;
  opacity: 0.5;
  flex-shrink: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.black};
  margin: 0;
  opacity: 0.6;
  text-transform: uppercase;
`;

const Cta = styled.h5`
  flex: 1 1 auto;
  text-align: right;
  margin: 0;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${props => props.theme.colors.blue};
  opacity: 1;
  margin-right: 0;
  order: 1;
  @media (min-width: 40rem) {
    margin-right: 16px;
    order: 2;
  }
  @media (min-width: 52rem) {
    opacity: 0;
  }
  ${Card}:hover & {
    opacity: 1;
    margin-right: 0;
  }
`;

const Image = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fff;
  margin-right: -48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: -1;
  opacity: 0;
  transform: translate(0px, -8px) rotate(180deg);
  ${Card}:hover & {
    opacity: 1;
    transform: translate(-40px, -8px) rotate(0deg);
  }
`;

export default ({ title, tag, cta, subtitle, url, customStyle, children }) => (
  <Link prefetch href={url}>
    <Card style={customStyle}>
      <Image>{children}</Image>
      <Text>
        <TitleText>
          <MobileBottom>
            <Title>{title}</Title>
            <Tag>{tag}</Tag>
          </MobileBottom>
          <Cta>{cta}</Cta>
        </TitleText>
        <Subtitle>{subtitle}</Subtitle>
      </Text>
    </Card>
  </Link>
);
