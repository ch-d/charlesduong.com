import styled, { keyframes } from "styled-components";
import { space } from "styled-system";
import { theme } from "../../../theme";

export const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(${theme.colors.grey}, #fff);
  background-repeat: no-repeat;
  background-position: 15% 96px;
  background-size: 50% 320px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 64px;
  padding-bottom: 0;
  margin: auto;
  @media (min-width: 40rem) {
    padding-top: 128px;
    padding-bottom: 64px;
  }
`;

export const TitleSection = styled.div`
  flex: 0;
  white-space: nowrap;
  padding-top: 16px;
  padding-left: 16px;
  @media (min-width: 40rem) {
    padding-bottom: 64px;
  }
`;

export const TextSection = styled.div`
  flex: 30rem;
  max-width: 30rem;
  margin: 16px auto;
  padding: 0 8px 0 32px;
  @media (min-width: 40rem) {
    margin: 0 auto;
    padding: 0 16px 0 64px;
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.black};
  font-size: 2.25rem;
  letter-spacing: 0.1em;
  font-weight: 100;
  margin: 0;
`;

export const SubTitle = styled.h2`
  color: ${theme.colors.black};
  font-size: 0.875rem;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.25em;
  font-weight: 500;
  opacity: 0.5;
`;

export const Paragraph = styled.p`
  color: ${theme.colors.black};
  font-size: 1rem;
  line-height: 1.5;
  ${space}
`;

export const Pill = styled.span`
  background-color: #17a890;
  color: #fff;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  position: relative;
  top: -2px;
  box-shadow: 0 0 4px 2px rgba(23, 168, 144, 0.24);
`;

export const pulse = keyframes`
  0% {
      opacity: 1;
      transform: scale(.5);
  }
  80% {
      opacity: 0;
      transform: scale(1.5);
  }
  100% {
      opacity: 0;
      transform: scale(3);
  }
`;

export const grow = keyframes`
  0% {
      transform: scale(.75);
  }
  50% {
      transform: scale(1);
  }
  100% {
      transform: scale(.75);
  }
`;

export const Pulse = styled.span`
  display: inline-block;
  position: relative;
  top: -1px;
  margin-right: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #fff;
  position: relative;
  animation: ${grow} 2s ease 0s infinite;
  &:after {
    content: "";
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: 0.125rem solid #fff;
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    animation: ${pulse} 2s ease 0s infinite;
  }
`;
