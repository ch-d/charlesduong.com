import styled from 'styled-components';
import { Box } from 'grid-styled';
import { space } from 'styled-system';

const Icolink= styled.a`
  ${space}
  &:hover {
    border-bottom: 1px solid ${props => props.color};
    color: ${props => props.color};
  };
  font-size: 0.75rem;
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
`

export default () => (
  <Box>
    <Icolink href='https://twitter.com/charlesduong_' target='_blank' mr={1} color="#1DA1F2">
      Twitter
    </Icolink>
    <Icolink href='https://linkedin.com/in/charlesduong' target='_blank' mx={1} color="#0077B5">
      Linkedin
    </Icolink>
    <Icolink href='https://github.com/ch-d' target='_blank' mx={1} color="#181717">
      Github
    </Icolink>
    <Icolink href='mailto:charles@charlesduong.com' target='_blank' ml={1} color="#D14836">
      Email
    </Icolink>
  </Box>
)
