import styled from "styled-components";
import { space, layout } from "styled-system";
import { theme } from "../../theme";
import { Caption } from "./Typography";
import Embed from "./Embed";

const Box = styled.div`
  ${space};
  ${layout};
`;

const ImagesThreeBg = styled.div`
  width: 100%;
  background: linear-gradient(
    15deg,
    ${props => theme.colors[props.color][20]} 75%,
    transparent 75%
  );
  background-repeat: no-repeat;
  background-size: 100% 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImageContainer = styled.div`
  padding: 0.5rem;
  // neutral[1000] -> neutral[50]
  box-shadow: 0px 2px 4px rgba(9, 39, 68, 0.16),
    0px 10px 20px rgba(9, 39, 68, 0.08),
    inset 0px -2px 8px rgba(193, 206, 217, 0.24),
    inset 0px 2px 8px rgba(193, 206, 217, 0.24),
    inset 0px 4px 8px rgba(255, 255, 255, 1);
  background-color: #fff;
  border-radius: 8px;
`;

const Image = styled(Embed)`
  width: 256px;
  height: 554.33px;
  // padding-bottom: 216.53%;
  // background-image: url(${props => props.src});
  // background-size: contain;
  // background-repeat: no-repeat;
`;

export default ({ color, images }) => (
  <ImagesThreeBg color={color}>
    {images.map((image, i) => (
      <Box m={2} key={i}>
        <ImageContainer>
          <Image src={image.src} border="0" m={0} />
        </ImageContainer>
        <Caption mt={[2, 1]} mb={[3, 4]}>
          {image.caption}
        </Caption>
      </Box>
    ))}
  </ImagesThreeBg>
);
