import { injectGlobal, styled } from 'styled-components';

const carouselStyles = () =>
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

export default carouselStyles
