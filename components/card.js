import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Link from 'next/link';
import { space } from 'styled-system';

const Main = styled.button`
  // remove default button styles
  font-family: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 2px;

  // Case Study Button vs. Index Button
  width: ${props => props.cs ? '100%' : '125%'};
  @media (max-width: 40rem) {
      width: 100%;
  };
  display: ${props => props.disp};

  // Main styles
  background-color: transparent;
  &:hover {
    transform: scale(1.025);
  };
  ${space};
`;

const Info = Box.extend`
  text-align: left;
  @media (max-width: 50rem) {
    height: 14rem;
  };
  @media (max-width: 40rem) {
    height:auto
  };
  display: flex;
  flex-direction: column;
  ${Main}:hover & {
    padding-left: 2rem;
  }
`

const Date = styled.h5`
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0.25rem;
  opacity: 0.35;
  @media (max-width: 40rem) {
    text-align: center
  }
`

const Title = styled.h3`
  font-family: IBM Plex Sans;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: .1em;
  color: ${props => props.theme.colors.black};
  text-transform: lowercase;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1;
  @media (max-width: 40rem) {
    text-align: center
  };
`

const Sub = styled.h4`
  font-family: IBM Plex Sans;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: .1em;
  color: ${props => props.theme.colors.blue};
  margin: 0;
  padding-bottom: 1rem;
  @media (max-width: 50rem) {
    padding-bottom: 0.5rem;
  };
  @media (max-width: 40rem) {
    text-align: center
  };
`

const CsLink = Flex.extend`
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 50rem) {
    justify-content: flex-start;
  };
  @media (max-width: 40rem) {
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(0,0,0,0.12);
    padding-bottom: 0.25rem;
  };
  opacity: 0.75;
  margin-top: 1.5rem;
`

const Sub2 = styled.h4`
  opacity: 0;
  font-family: IBM Plex Sans;
  font-size: 0.875rem;  
  font-weight: 400;
  letter-spacing: .1em;
  color: #fff;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.black};
  position: relative;
  top: -16px;
  @media (max-width: 50rem) {
    padding-bottom: 0.5rem
  };
  @media (max-width: 40rem) {
    padding-top: 1rem;
    padding-bottom: 0rem;
  };
  ${Main}:hover & {
    opacity: 1;
    top: 0px;
  }
`

const Image = styled.div`
  width: 100%;
  height: 18rem;
  @media (max-width: 50rem) {
    height: 14rem;
  };
  @media (max-width: 40rem) {
    height: 10rem;
  };
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  ${Main}:hover & {
    background-image: linear-gradient(180deg, ${props => props.theme.colors.black}, ${props => props.theme.colors.black}), url(${props => props.img});
    background-blend-mode: screen;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 40rem) {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`

// CHANGE SUB COMPONENT (DRY) TO LIST & KEYS TO-DO ---------------
export default ({ url, title, sub1, sub2, sub3, img, cs, disp, date, cta }) => (
  <Link prefetch href={url}>
    <Main cs={cs} mb={[2,4]} disp={disp}>
      <Flex wrap p={[0,2]}>
        <Info width={[1,1/3]} pt={[3,2,2]} pb={[2,0]}>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Sub>{sub1}</Sub>
          <Sub>{sub2}</Sub>
          <Sub>{sub3}</Sub>
        </Info>
        <Box width={[1,2/3]}>
          <Image img={img}>
            <Sub2>{cta}</Sub2>
          </Image>
        </Box>
      </Flex>
    </Main>
  </Link>
)
