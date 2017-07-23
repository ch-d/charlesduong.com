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
      <Social
        url='https://twitter.com/hicharlesd'
        site='twitter'
        color='1DA1F2'
      />
      <Social
        url='https://linkedin.com/in/charlesduong'
        site='linkedin'
        color='0077B5'
      />
      <Social
        url='https://github.com/ch-d'
        site='github'
        color='181717'
      />
      <Social
        url='mailto:charles@charlesduong.com'
        site='gmail'
        color='D14836'
      />
    </Center>
  </div>
)
