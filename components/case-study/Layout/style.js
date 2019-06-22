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

export const Container = styled.div`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  ${space};
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
    opacity: 0.5;
  }
  &:active {
    opacity: 0.8;
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
  opacity: 0.8;
  margin: 1.35rem auto 0 auto;
  text-transform: uppercase;
  letter-spacing: 0.15;
`;

export const CategoryItem = styled.p`
  color: ${theme.colors.neutral[500]};
  font-size: 0.75rem;
  margin: 0.25rem auto;
  font-weight: 500;
  opacity: 0.8;
`;

export const Title = styled.h1`
  color: ${theme.colors.neutral[800]};
  font-size: 1.5rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
`;
