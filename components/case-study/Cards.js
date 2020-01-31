import styled from "styled-components";
import { theme } from "../../theme";

export const CardContainer = styled.ol`
  counter-reset: section;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const Card = styled.li`
  list-style-type: none;
  display: flex;
  flex: 1 1 240px;
  background-color: ${props => theme.colors[props.color][10]};
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  position: relative;
  &:before {
    counter-increment: section;
    content: "${props => props.title && props.title}" ${props =>
  !props.title && "counter(section)"} ;
    font-size: 2rem;
    font-weight: 700;
    color: ${props => theme.colors[props.color][500]};
    position: absolute;
    top: 16px;
    left: 32px;
    z-index: 1;
  }
`;

export const CardTextContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  &:before {
    display: block;
    content: " ";
    background-color: ${props => theme.colors[props.color][50]};
    position: absolute;
    // pseudo top = margin top
    top: -32px;
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }
`;

export const CardTitle = styled.h4`
  color: ${props => theme.colors[props.color][500]};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const CardContent = styled.p`
  color: ${props => theme.colors[props.color][800]};
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 0;
`;
