import styled from "styled-components";
import { space } from "styled-system";
import { theme } from "../../../theme";

// List
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 52rem) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.5rem;
  }
`;

export const External = styled.a`
  text-decoration: none;
`;

export const Divider = styled.div`
  height: ${props => props.h}px;
  margin-left: 20%;
  @media (min-width: 40rem) {
    margin-left: 37.5%;
    width: 60%;
  }
  width: 80%;
  background: linear-gradient(
    to left,
    ${props =>
      props.color ? theme.colors[props.color][20] : theme.colors.blue[50]},
    ${props =>
      props.color ? theme.colors[props.color][200] : theme.colors.green[100]}
  );
  transform: translateY(280px);
  position: relative;
  z-index: 1;
  ${space};
`;

// Item
export const Card = styled.button`
  // remove default button styles
  font-family: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;

  // card styles
  display: flex;
  align-items: center;
  flex: 320px;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  border-bottom: 2px solid ${theme.colors.neutral[10]};
  @media (min-width: 40rem) {
    border-bottom: none;
  }
`;

export const Text = styled.div`
  width: 100%;
`;

export const MobileBottom = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  order: 2;
  @media (min-width: 40rem) {
    order: 1;
  }
`;

export const TitleText = styled.span`
  display: flex;
  align-items: baseline;
  flex: 1 1 auto;
  flex-direction: column;
  @media (min-width: 40rem) {
    flex-direction: row;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: ${theme.colors.neutral[500]};
  margin: 0;
  text-transform: lowercase;
  flex-shrink: 0;
`;

export const Tag = styled.h5`
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: ${theme.colors.neutral[200]};
  margin: 0 0.5rem;
  flex-shrink: 0;
  text-transform: uppercase;
`;

export const Subtitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.1em;
  color: ${theme.colors.neutral[200]};
  margin: 0;
  text-transform: uppercase;
`;

export const Cta = styled.h5`
  flex: 1 1 auto;
  text-align: right;
  margin: 0;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${theme.colors.neutral[300]};
  opacity: 1;
  margin-right: 0;
  order: 1;
  @media (min-width: 40rem) {
    margin-right: 16px;
    order: 2;
  }
  @media (min-width: 52rem) {
    opacity: 0;
  }
  ${Card}:hover & {
    opacity: 1;
    margin-right: 0;
  }
`;

export const Image = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fff;
  margin-right: -48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: -1;
  opacity: 0;
  transform: translate(0px, -8px) rotate(180deg);
  ${Card}:hover & {
    opacity: 1;
    transform: translate(-40px, -8px) rotate(0deg);
  }
`;
