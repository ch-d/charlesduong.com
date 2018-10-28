import baseStyles from '../../constants/baseStyles';
import colors from '../../constants/colors';
import styled from 'styled-components/';
import { space } from 'styled-system';
import { ThemeProvider } from 'styled-components'
import Heading from '../components/heading';
import { Box } from 'grid-styled';
import Link from 'next/link';
import Social from '../components/social';

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
          <Social />
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
