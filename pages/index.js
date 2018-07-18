import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import styled from 'styled-components/';
import { space } from 'styled-system';
import { ThemeProvider } from 'styled-components'
import Heading from '../components/heading';
import { Box } from 'grid-styled';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'react-feather'

const theme = {
  breakpoints: [
    30, 45, 60
  ],
}

baseStyles();

const White = styled.div`
  height: 100vh;
  width: 100%;
  display: table;
  box-sizing: border-box;
  ${space}
`

const WhiteOffset = styled.div`
  background-color: #FAFAFA;
  // background-image: linear-gradient(0deg, #FAFAFA 25%, #B5FFFC 100%);
	border: 3px double #F8F8F8;
  display: table-cell;
  vertical-align: middle;
  @media screen and (min-width: 60em) {
    vertical-align: bottom;
  };
  color: #001b44;
  text-align: center;
  @media screen and (min-width: 30em) {
    text-align: left
  };
  ${space}
`;

const Title = styled.h1`
	font-family: quicksand;
	color: ${props => props.theme.colors.black};
  font-size: 2.25rem;
  letter-spacing: .1em;
  font-weight: 100;
  margin: 0;
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.colors.blue};
  font-size: 0.875rem;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: .25em;
  font-weight: 600;
  padding-bottom: 1rem;
`;

const Icolink= styled.a`
  ${space}
  &:hover {
    border-bottom: 2px solid ${props => props.color}
  }
  &:hover svg {
    stroke:${props => props.color}
  };
`

const Main = styled.a`
  border-bottom: 2px solid ${props => props.theme.colors.blue};;
  text-decoration:none;
  display:inline-block;
  line-height:1rem;
  margin-top:1rem;
  padding-bottom:4px;
  &:hover, &:focus {
    padding-bottom:6px;
    margin-bottom:-2px;
  };
  &:visited, &:active {
    border-bottom:2px solid ${props => props.theme.colors.blue};
    text-decoration:none;
  };
  cursor: pointer;
`

const Moji = styled.span`
  margin-left:0.5rem;
`

export default () => (
  <div>
    <Heading titleCase=""/>
    <ThemeProvider theme={colors}>
    	<White p={[2,2,2,3]}>
    		<WhiteOffset p={[2,2,2,3]} >
    			<Title>charles duong</Title>
    			<SubTitle>product designer</SubTitle>
          <Box>
            <Icolink href='https://twitter.com/hicharlesd' target='_blank' mr={1} color="#1DA1F2">
              <Twitter color="#7f959d" size={24} />
            </Icolink>
            <Icolink href='https://linkedin.com/in/charlesduong' target='_blank' mx={1} color="#0077B5">
              <Linkedin color="#7f959d" size={24} />
            </Icolink>
            <Icolink href='https://github.com/ch-d' target='_blank' mx={1} color="#181717">
              <Github color="#7f959d" size={24} />
            </Icolink>
            <Icolink href='mailto:charles@charlesduong.com' target='_blank' mx={1} color="#D14836">
              <Mail color="#7f959d" size={24} />
            </Icolink>
            {/* <Icolink href='http://scapes.charlesduong.com' target='_blank' mx={1} color="#0077B5">
              <Camera size={24} />
            </Icolink> */}
          </Box>
          <Link href="/work" prefetch>
            <Main>
              view design work
            </Main>
          </Link>
          <Moji>👀</Moji>
    		</WhiteOffset>
    	</White>
    </ThemeProvider>
  </div>
)
