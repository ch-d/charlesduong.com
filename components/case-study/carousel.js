import Slider from "react-slick";
import styled, { injectGlobal } from "styled-components";

() =>
  injectGlobal`
    /* .slick-dots li button:before,
    .slick-dots li.slick-active button:before {

    } */
    .slick-arrow:before {
      color: #333;
      @media (max-width: 62rem) {
        display: none;
      }
    }
    .slick-dots {
      bottom: 3rem;
      @media (max-width: 40rem) {
        bottom: 2rem;
      }
    }    
    .slick-slide h6 {
      @media (max-width: 40rem){
        padding-right: 1rem;
      }
    }
  `;

const settings = {
  accessibility: true,
  dots: true,
  infinite: true,
  speed: 500
};

const Container = styled.div`
  margin-bottom: 32px;
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
