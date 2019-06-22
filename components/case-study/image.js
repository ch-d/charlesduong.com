import styled from "styled-components";
import { space, flexbox, layout } from "styled-system";
import { Caption } from "./Typography";

const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

const Box = styled.div`
  ${space};
  ${layout};
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  border: 0;
  @media (max-width: 40rem) {
    max-width: none;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
`;

const ImageBorder = styled.div`
  border: ${props =>
    props.showBorder ? "1px solid rgba(78, 211, 202, 0.25)" : ""};
  padding: ${props => (props.showBorder ? "0.5rem" : "")};
  border-radius: 0.5rem;
`;

export default ({ images, fullWidth }) => (
  <Flex flexWrap={["wrap", "nowrap"]} mb={[3, 1]}>
    {images.map((image, i) =>
      fullWidth ? (
        <Box key={i} width={[1]} mb={[2, 2, 0]}>
          <ImageBorder showBorder={image.showBorder}>
            <Image
              src={image.src}
              alt={image.caption + " image not found 😵 "}
              title={image.caption}
            />
          </ImageBorder>
          <Caption mt={[2, 1]} mb={[3, 4]}>
            {image.caption}
          </Caption>
        </Box>
      ) : (
        <Box
          key={i}
          width={[1, 1 / 2]}
          pr={[0, i % 2 === 0 ? 2 : 0, i % 2 === 0 ? 3 : 0]}
          pl={[0, i % 2 === 0 ? 0 : 2, i % 2 === 0 ? 0 : 3]}
          mb={[2, 2, 0]}
        >
          <Image
            src={image.src}
            alt={image.caption + " image not found 😵 "}
            title={image.caption}
          />
          <Caption mt={[2, 1]} mb={[3, 4]}>
            {image.caption}
          </Caption>
        </Box>
      )
    )}
  </Flex>
);
