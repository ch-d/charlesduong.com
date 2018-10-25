import styled from 'styled-components';
import { Box } from 'grid-styled';
import { space } from 'styled-system';
import { Twitter, Linkedin, GitHub, Mail } from 'react-feather'

const Icolink= styled.a`
  ${space}
  &:hover {
    border-bottom: 2px solid ${props => props.color}
  }
  &:hover svg {
    stroke:${props => props.color}
  };
`

export default () => (
  <Box>
    <Icolink href='https://twitter.com/hicharlesd' target='_blank' mr={1} color="#1DA1F2">
      <Twitter color="#7f959d" size={24} />
    </Icolink>
    <Icolink href='https://linkedin.com/in/charlesduong' target='_blank' mx={1} color="#0077B5">
      <Linkedin color="#7f959d" size={24} />
    </Icolink>
    <Icolink href='https://github.com/ch-d' target='_blank' mx={1} color="#181717">
      <GitHub color="#7f959d" size={24} />
    </Icolink>
    <Icolink href='mailto:charles@charlesduong.com' target='_blank' mx={1} color="#D14836">
      <Mail color="#7f959d" size={24} />
    </Icolink>
  </Box>
)
