import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Link from 'next/link';
import { space } from 'styled-system';

const Main = styled.button`
  //remove default button style
  margin      : 0;
  padding     : 0;
  border      : 0;
  background  : transparent;
  font-family : inherit;
  font-size   : 1em;
  cursor      : pointer;
  &:-moz-focus-inner{
    padding : 0;
    border  : 0;
  }
  ////
  width: ${props => props.cs ? '100%' : '125%'};
  @media (max-width: 40rem) {
      width:100%;
  };
  height: 100%;
  background-color:#fff;
  box-shadow: 0 2px 4px 2px #CDCDCD;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 8px 16px 8px #CDCDCD;
    cursor: pointer;
  };
  display:${props => props.disp};
  ${space};
  // &:hover ${Image} {
  //   background-blend-mode: normal
  // }
`;


const Info = Box.extend`
  text-align:left;
`

const Title = styled.h3`
  color: ${props => props.theme.colors.black};
  font-size: 1.75rem;
  letter-spacing: .1em;
  font-weight: 200;
  line-height:1;
  text-transform:lowercase;
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
  @media (max-width: 40rem) {
    height:10rem;
  };
  background-image:url(${props => props.img});
  background-size:100%;
  // background-color: ${props => props.theme.colors.blue};
  // background-blend-mode: screen
`



// CHANGE SUB COMPONENT (DRY) TO LIST & KEYS TO-DO ---------------
export default ({ url, title, sub1, sub2, sub3, img, cs, disp }) => (
  <Link prefetch href={url}>
    <Main cs={cs} mb={[2,4]} disp={disp}>
      <Flex wrap p={2}>
        <Box width={[1,2/3]}>
          <Image img={img} />
        </Box>

        <Info width={[1,1/3]} pl={[0,3]}>
          <Title mb={[1,2]}>{title}</Title>
          <Sub>{sub1}</Sub>
          <Sub>{sub2}</Sub>
          <Sub>{sub3}</Sub>
        </Info>
      </Flex>
    </Main>
  </Link>
)
