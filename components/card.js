import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Link from 'next/link';
import { space } from 'styled-system';

const Main = styled.button`
  // remove default button styles
  font-family : inherit;
  border:0;
  padding:0;
  cursor: pointer;

  // Case Study Button vs. Index Button
  width: ${props => props.cs ? '100%' : '125%'};
  @media (max-width: 40rem) {
      width:100%;
  };
  display:${props => props.disp};

  // Main styles
  background-color:#fff;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px ${props => props.theme.colors.wash};
  &:hover {
    box-shadow: 0 2px 8px 2px ${props => props.theme.colors.wash};
  };
  ${space};
`;

const Info = Box.extend`
  text-align:left;
`

const Title = styled.h3`
  color: ${props => props.theme.colors.black};
  letter-spacing: .1em;
  font-size: 1.75rem;
  font-weight: 200;
  line-height:1;
  text-transform:lowercase;
  margin-top:0px;
  ${space}
`

const Sub = styled.h4`
  color: ${props => props.theme.colors.blue};
  font-size: 0.875rem;
  letter-spacing: .1em;
  font-weight: 600;
  line-height:1.5;
  margin:0
`

const Image = styled.div`
  width:100%;
  height:18rem;
  @media (max-width: 50rem) {
    height:14rem;
  };
  @media (max-width: 40rem) {
    height:10rem;
  };
  background-image:url(${props => props.img});
  background-size:cover;
  background-position:center;
`

// CHANGE SUB COMPONENT (DRY) TO LIST & KEYS TO-DO ---------------
export default ({ url, title, sub1, sub2, sub3, img, cs, disp }) => (
  <Link prefetch href={url}>
    <Main cs={cs} mb={[2,4]} disp={disp}>
      <Flex wrap p={[0,2]}>
        <Box width={[1,2/3]}>
          <Image img={img} />
        </Box>
        <Info width={[1,1/3]} pl={[2,3]} pt={3} pb={[3,0]}>
          <Title mb={[1,2]}>{title}</Title>
          <Sub>{sub1}</Sub>
          <Sub>{sub2}</Sub>
          <Sub>{sub3}</Sub>
        </Info>
      </Flex>
    </Main>
  </Link>
)
