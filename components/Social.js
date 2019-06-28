import styled from "styled-components";
import { space } from "styled-system";

const Anchor = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${props => props.theme.colors.neutral[800]};
  &:hover {
    border-bottom: 1px solid ${props => props.color};
    color: ${props => props.color};
    padding-bottom: 2px;
    margin-bottom: -2px;
  }
  ${space}
`;

export default () => (
  <React.Fragment>
    <Anchor
      href="https://twitter.com/charlesduong_"
      target="_blank"
      mr={2}
      color="#1DA1F2"
    >
      Twitter
    </Anchor>
    <Anchor
      href="https://linkedin.com/in/charlesduong"
      target="_blank"
      mx={2}
      color="#0077B5"
    >
      Linkedin
    </Anchor>
    <Anchor
      href="mailto:charles@charlesduong.com"
      target="_blank"
      ml={2}
      color="#D14836"
    >
      Email
    </Anchor>
  </React.Fragment>
);
