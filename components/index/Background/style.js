import styled from "styled-components";
import { space } from "styled-system";
import { theme } from "../../../theme";

export const Box = styled.div`
  ${space};
`;

export const Main = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 2rem auto;
`;

export const Grey = styled.div`
  background-color: ${theme.colors.blue[10]};
  background-image: linear-gradient(
    to ${props => (props.list ? "left" : "right")},
    #fff,
    ${props =>
      props.color ? theme.colors[props.color][5] : theme.colors.blue[5]}
  );
  width: 100%;
  transform: translateX(${props => (props.list ? "0" : "-32")}px);
  margin-left: ${props => (props.list ? "0" : "-32")}px;
  padding-bottom: 8px;
  @media (min-width: 40rem) {
    padding-bottom: 32px;
  }
`;

export const Divider = styled.div`
  height: ${props => props.h}px;
  margin-left: ${props => (props.list ? "0" : "20%")};
  width: 80%;
  @media (min-width: 40rem) {
    margin-left: ${props => (props.list ? "2.5%" : "37.5%")};
    width: 60%;
  }
  background: linear-gradient(
    to ${props => (props.list ? "right" : "left")},
    ${props =>
      props.color ? theme.colors[props.color][20] : theme.colors.blue[50]},
    ${props =>
      props.color ? theme.colors[props.color][200] : theme.colors.green[100]}
  );
  ${space};
`;

export const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.1em;
  font-weight: 100;
  padding-left: 8px;
  transform: translateY(-50%);
  color: ${theme.colors.neutral[500]};
`;

export const Container = styled.div`
  transform: translateX(${props => (props.list ? "0" : "64")}px);
  padding-left: 8px;
  padding-right: 8px;
  width: calc(100% - 16px);
`;
