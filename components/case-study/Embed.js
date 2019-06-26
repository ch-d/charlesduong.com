import styled from "styled-components";
import { border, layout, space } from "styled-system";

const Embed = styled.iframe`
  width: 100%;
  height: 100vh;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  ${border};
  ${layout};
  ${space};
`;

export default Embed;
