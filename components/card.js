import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Link from 'next/link';

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
  width:125%;
  @media (max-width: 40rem) {
      width:100%;
  };
  height: 320px;
  background-color:#fff;
  box-shadow: 0 2px 4px 2px #CDCDCD;
  border-radius: 2px;
  margin-bottom:4rem;
  &:hover {
    box-shadow: 0 8px 16px 8px #CDCDCD;
    cursor: pointer;
  }
`;

const Fill = Flex.extend`
	height:100%;
  position:relative;
`;

const Info = Box.extend`
  position:absolute;
  bottom:2rem;
  text-align:left;
`

const Title = styled.h3`
  color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  letter-spacing: .1em;
  font-weight: 100;
  line-height:1;
  text-transform:uppercase;
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
  height:100%;
  background-image:url(${props => props.img});
  background-size:100%;
  filter:grayscale(70%);
  background-color: ${props => props.theme.colors.blue};
  background-blend-mode: multiply;
`

// CHANGE SUB COMPONENT (DRY) TO LIST & KEYS TO-DO ---------------
export default ({ url, title, sub1, sub2, sub3, img, info_num, img_num }) => (
  <Link prefetch href={url}>
    <Main>
      <Fill wrap p={2}>
        <Box width={1/3} order={info_num}>
          <Info px={2}>
            <Title>{title}</Title>
            <Sub>{sub1}</Sub>
            <Sub>{sub2}</Sub>
            <Sub>{sub3}</Sub>
          </Info>
        </Box>
        <Box width={2/3} order={img_num}>
          <Image img={img} />
        </Box>
      </Fill>
    </Main>
  </Link>
)
