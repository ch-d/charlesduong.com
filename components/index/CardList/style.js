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
  width: 100%;
  background-color: transparent;
  @media (max-width: 40rem) {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    overflow: hidden;
  }
  ${space};
`;

export const Info = styled.div`
  text-align: left;
  @media (max-width: 40rem) {
    order: 2;
    padding-bottom: 0;
  }
  ${space};
  ${flexbox};
  ${layout};
`;

export const Subtitle = styled.h5`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  color: ${theme.colors.blue};
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0.25rem;
  opacity: 0.5;
  @media (max-width: 40rem) {
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: ${theme.colors.blue};
  text-transform: lowercase;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1;
  @media (max-width: 40rem) {
    text-align: center;
  }
`;

export const DescriptionItem = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.black};
  margin-top: 0;
  margin-bottom: 1rem;
  margin-right: 2rem;
  line-height: 1.5;
  @media (max-width: 40rem) {
    text-align: center;
    margin-left: 2rem;
  }
  opacity: 0.75;
`;

export const CtaMobile = styled.h4`
  display: none;
  @media (max-width: 40rem) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  opacity: 0.75;
  margin-top: 1.5rem;
  padding-top: 1rem;
`;

export const Image = styled.div`
  width: 100%;
  height: 18rem;
  @media (max-width: 50rem) {
    height: 14rem;
  }
  @media (max-width: 40rem) {
    height: 10rem;
  }
  border: 4px solid #fff;
  border-radius: 2px;
  box-shadow: 0px 0px 1px ${theme.colors.neutral[100]};
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
  }
`;

export const CtaContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Cta = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  margin: 0 4rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  background-color: ${props => theme.colors[props.color][10]};
  color: ${props => theme.colors[props.color][800]};
  border: 1px solid ${props => theme.colors[props.color][500]};
  @media (max-width: 40rem) {
    display: none;
  }

  // hover effect
  position: relative;
  opacity: 0;
  transform: translateY(-80%);
  ${Main}:hover & {
    opacity: 1;
    transform: translateY(-50%);
  }
`;
