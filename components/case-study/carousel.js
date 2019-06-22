import Slider from "react-slick";
import styled from "styled-components";
// import carouselStyles from "../../constants/carouselStyles";

// carouselStyles();

const settings = {
  accessibility: true,
  dots: true,
  infinite: true,
  speed: 500
};

const Container = styled.div`
  @media (max-width: 40rem) {
    max-width: none;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding-right: 1rem;
  }
`;

export default ({ children }) => (
  <Container>
    <Slider {...settings}>{children}</Slider>
  </Container>
);
