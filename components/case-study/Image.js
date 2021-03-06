import styled from "styled-components";
import { space, layout } from "styled-system";
import { Caption } from "./Typography";
import Container from "./Container";

const Box = styled.div`
  ${space};
  ${layout};
`;

export const Image = styled.img`
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

export default ({ src, caption, showBorder }) => (
  <Container>
    <Box width={[1]}>
      <ImageBorder showBorder={showBorder}>
        <Image
          src={src}
          alt={caption + " image not found 😵 "}
          title={caption}
        />
      </ImageBorder>
      <Caption mt={1}>{caption}</Caption>
    </Box>
  </Container>
);
