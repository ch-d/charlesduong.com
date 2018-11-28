import styled from 'styled-components';
import { Box } from 'grid-styled';

const Columns = Box.extend`
  columns: 2;
  column-gap: 2rem;
`

export default ({ children }) => (
  <Columns mb={3}>
    {children}
  </Columns>
)