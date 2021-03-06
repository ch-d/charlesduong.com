import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Link from "next/link";
import { space } from "styled-system";

const Main = styled.button`
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

const Info = Box.extend`
  text-align: left;
  @media (max-width: 40rem) {
    order: 2;
    padding-bottom: 0;
  }
`;

const Subtitle = styled.h5`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0.25rem;
  opacity: 0.5;
  @media (max-width: 40rem) {
    text-align: center;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.blue};
  text-transform: lowercase;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1;
  @media (max-width: 40rem) {
    text-align: center;
  }
`;

const DescriptionItem = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
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

function Description(props) {
  const description = props.desc;
  return description.map((description, i) => (
    <DescriptionItem key={i}>{description}</DescriptionItem>
  ));
}

const CtaMobile = styled.h4`
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

const Cta = styled.h4`
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #fff;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.black};
  @media (max-width: 40rem) {
    display: none;
    padding-top: 1rem;
    padding-bottom: 0rem;
  }

  // hover effect
  opacity: 0;
  position: relative;
  top: -16px;
  ${Main}:hover & {
    opacity: 1;
    top: 0px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 18rem;
  @media (max-width: 50rem) {
    height: 14rem;
  }
  @media (max-width: 40rem) {
    height: 10rem;
  }
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  ${Main}:hover & {
    background-image: linear-gradient(
        180deg,
        ${props => props.theme.colors.black},
        ${props => props.theme.colors.black}
      ),
      url(${props => props.img});
    background-blend-mode: screen;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

// CHANGE SUB COMPONENT (DRY) TO LIST & KEYS TO-DO ---------------
export default ({ url, title, img, cs, disp, subtitle, cta, desc }) => (
  <Link prefetch href={url}>
    <Main cs={cs} my={[1, 3]} disp={disp}>
      <Flex wrap p={[0, 2]}>
        <Info width={[1, 1 / 3]} pt={[3, 2, 2]} pb={[2, 0]}>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
          <Description desc={desc} />
          <CtaMobile>{cta}</CtaMobile>
        </Info>
        <Box width={[1, 2 / 3]}>
          <Image img={img}>
            <Cta>{cta}</Cta>
          </Image>
        </Box>
      </Flex>
    </Main>
  </Link>
);
