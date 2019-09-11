import styled from "styled-components";
import { space, flexbox, color } from "styled-system";
import { theme } from "../../../theme";

export const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

export const Main = styled.div`
  width: 100%;
  ${color};
`;

export const SlantBg = styled.div`
  width: 100%;
  background: #fff;
  background: linear-gradient(
    15deg,
    #fff 50%,
    ${props => theme.colors[props.color][10]} 50%
  );
  background-repeat: no-repeat;
  background-size: 100% 480px;
`;

export const Logo = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.colors.neutral[800]};
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

export const Description = styled.div`
  max-width: 35rem;
  width: 100%;
  padding-right: 2rem;
  @media (max-width: 40rem) {
    padding-right: 0;
  }
`;

export const Details = styled.div`
  padding-left: 2rem;
  @media (max-width: 30rem) {
    padding-left: 1rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  width: ${props => props.w}px;
  height: 100%;
  height: ${props => props.h}px;
  background: linear-gradient(
    to bottom,
    ${props => theme.colors[props.color][50]},
    ${props => theme.colors[props.color][100]}
  );
  ${space};
`;

export const CategoryLabel = styled.h3`
  color: ${props => theme.colors[props.color][500]};
  font-size: 0.75rem;
  margin-top: 1.25rem;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 0.15;
  ${space};
`;

export const CategoryItem = styled.p`
  color: ${theme.colors.neutral[500]};
  font-size: 0.75rem;
  margin: 0.25rem 0;
`;

export const Title = styled.h1`
  color: ${theme.colors.neutral[800]};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
`;
