import styled from "styled-components";
import { space, flexbox, layout } from "styled-system";
import Container from "./Container";
import { Caption } from "./Typography";
import { Image } from "./Image";

const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

const Box = styled.div`
  ${space};
  ${layout};
`;

export default ({ images }) => (
  <Container>
    <Flex flexWrap={["wrap", "nowrap"]} justifyContent="center">
      {images.map((image, i) => (
        <Box
          key={i}
          width={[1, 1 / 2]}
          pr={[0, i % 2 === 0 ? 2 : 0, i % 2 === 0 ? 3 : 0]}
          pl={[0, i % 2 === 0 ? 0 : 2, i % 2 === 0 ? 0 : 3]}
        >
          <Image
            src={image.src}
            alt={image.caption + " image not found 😵 "}
            title={image.caption}
          />
          <Caption mt={1}>{image.caption}</Caption>
        </Box>
      ))}
    </Flex>
  </Container>
);
