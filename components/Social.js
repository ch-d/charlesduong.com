import styled from "styled-components";
import { space } from "styled-system";

const Icolink = styled.a`
  &:hover {
    border-bottom: 1px solid ${props => props.color};
    color: ${props => props.color};
  }
  font-size: 0.875rem;
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  ${space}
`;

export default () => (
  <React.Fragment>
    <Icolink
      href="https://twitter.com/charlesduong_"
      target="_blank"
      mr={2}
      color="#1DA1F2"
    >
      Twitter
    </Icolink>
    <Icolink
      href="https://linkedin.com/in/charlesduong"
      target="_blank"
      mx={2}
      color="#0077B5"
    >
      Linkedin
    </Icolink>
    {/* <Icolink href='https://github.com/ch-d' target='_blank' mx={1} color="#181717">
      Github
    </Icolink> */}
    <Icolink
      href="mailto:charles@charlesduong.com"
      target="_blank"
      ml={2}
      color="#D14836"
    >
      Email
    </Icolink>
  </React.Fragment>
);
