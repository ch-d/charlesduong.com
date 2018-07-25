import styled from 'styled-components'
import {Box} from 'grid-styled'
import Social from './social'

const Center = Box.extend`
  text-align:center;
  width:100%;
  color: ${props => props.theme.colors.blue};
  font-size: 0.75rem;
  font-weight:100;
`

export default () => (
  <div>
    <Center mt={1}>✌️</Center>
    <Center mb={2}>take care</Center>
    <Center mb={3}>
      <Social />
    </Center>
  </div>
)
