import styled from "styled-components";
import { Box } from "grid-styled";

const Columns = Box.extend`
  columns: 2;
  column-gap: 2rem;
  @media (max-width: 50rem) {
    columns: 1;
    max-width: 35rem;
    width: 100%;
    margin-right: auto;
  }
`;

export default ({ children }) => <Columns mb={3}>{children}</Columns>;
