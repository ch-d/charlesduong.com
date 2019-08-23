import styled from "styled-components";
import { space, flexbox, layout } from "styled-system";
import { theme } from "../../../theme";

export const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};
`;

export const Box = styled.div`
  ${space};
  ${layout};
`;

export const Main = styled.button`
  // remove default button styles
  font-family: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;

  // main button styles
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0px 0px 1px ${theme.colors.neutral[100]};
  @media (min-width: 40rem) {
    background-color: transparent;
    box-shadow: none;
  }
  ${space};
`;

export const Info = styled.div`
  text-align: left;
  order: 1;
  @media (min-width: 40rem) {
    order: 0;
  }
  ${space};
  ${flexbox};
  ${layout};
`;

export const Subtitle = styled.h5`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  color: ${theme.colors.neutral[200]};
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0.25rem;
  text-align: center;
  @media (min-width: 40rem) {
    text-align: left;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: ${theme.colors.neutral[800]};
  text-transform: lowercase;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1;
  text-align: center;
  @media (min-width: 40rem) {
    text-align: left;
  }
`;

export const DescriptionItem = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.neutral[800]};
  margin: 0 0 0 2rem;
  line-height: 1.5;
  text-align: center;
  @media (min-width: 40rem) {
    text-align: left;
    margin-left: 0;
    margin-right: 2rem;
  }
`;

export const Cta = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 40rem) {
    border: none;
    justify-content: flex-start;
  }
  color: ${theme.colors.neutral[500]};
  border-top: 1px solid ${theme.colors.neutral[10]};
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 1.5rem;
  padding-top: 1rem;
  letter-spacing: 1px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 10rem;
  @media (min-width: 40rem) {
    height: 14rem;
    border-radius: 2px;
    border: 4px solid #fff;
    box-shadow: 0px 0px 1px ${theme.colors.neutral[100]};
  }
  @media (min-width: 50rem) {
    height: 18rem;
  }
  background-size: cover;
  background-position: top;
  background-image: url(${props => props.img}),
    linear-gradient(
      ${props => theme.colors[props.color][40]},
      ${props => theme.colors[props.color][60]}
    );
  position: relative;

  &:before {
    border-radius: inherit;
    background-image: url(${props => props.img}),
      linear-gradient(
        ${props => theme.colors[props.color][100]},
        ${props => theme.colors[props.color][500]}
      );
    background-size: cover;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s;
  }
  ${Main}:hover & {
    &:before {
      opacity: 1;
    }
    transform: translateY(-4px);
    box-shadow: 0px 4px 8px ${theme.colors.neutral[40]};
  }
`;
