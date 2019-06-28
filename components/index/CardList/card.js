import Link from "next/link";
import {
  Main,
  Flex,
  Info,
  Subtitle,
  Title,
  DescriptionItem,
  CtaMobile,
  Box,
  Image,
  CtaContainer,
  Cta
} from "./style";

function Description(props) {
  const description = props.desc;
  return description.map((description, i) => (
    <DescriptionItem key={i}>{description}</DescriptionItem>
  ));
}

export default ({ url, title, img, cs, disp, subtitle, cta, desc, color }) => (
  <Link prefetch href={url}>
    <Main cs={cs} my={[2, 4]} disp={disp}>
      <Flex flexWrap="wrap" p={[1, 3]}>
        <Info width={[1, 1 / 3]} pt={[4, 3, 3]} pb={[3, 1]}>
          <Subtitle color={color}>{subtitle}</Subtitle>
          <Title color={color}>{title}</Title>
          <Description desc={desc} />
          <CtaMobile>{cta}</CtaMobile>
        </Info>
        <Box width={[1, 2 / 3]}>
          <Image img={img} color={color}>
            <CtaContainer />
            <Cta color={color}>{cta}</Cta>
          </Image>
        </Box>
      </Flex>
    </Main>
  </Link>
);
