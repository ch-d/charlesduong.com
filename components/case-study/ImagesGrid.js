import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  height: 36rem;
  @media (max-width: 40rem) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    height: 48rem;
  }
  @media (max-width: 30rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
  max-width: 100%;
  width: 100%;
  margin-bottom: 2rem;
`;

export const GridImage = styled.div`
  border-radius: 0.25rem;
  background-image: ${props => props.image};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  grid-column: ${props => props.column_l};
  grid-row: ${props => props.row_l};
  @media (max-width: 40rem) {
    grid-column: ${props => props.column_m};
    grid-row: ${props => props.row_m};
  }
  @media (max-width: 30rem) {
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
  }
`;
