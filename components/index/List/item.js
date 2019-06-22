import Link from "next/link";
import {
  Card,
  Image,
  Text,
  TitleText,
  MobileBottom,
  Title,
  Tag,
  Cta,
  Subtitle
} from "./style";

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
