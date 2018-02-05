import baseStyles from '../constants/baseStyles';
import styled from 'styled-components/';
import { space } from 'styled-system';
import { ThemeProvider } from 'styled-components'
import Heading from '../components/heading';
import { Box } from 'grid-styled';

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

const H1 = styled.h1`
  font-size: 2.25rem;
  font-weight: 100;
  margin: 0;
  letter-spacing: .1em;
`

const H2 = styled.h2`
  font-size: .875rem;
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 1rem;
  margin: 0;
  letter-spacing: .25em;
`

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
  border-bottom: 2px solid #0000EE;
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
    border-bottom:2px solid #551A8B
    text-decoration:none;
  }
`

const Moji = styled.span`
  margin-left:0.5rem;
`

export default () => (
  <div>
    <Heading titleCase=""/>
    <ThemeProvider theme={theme}>
    	<White p={[2,2,2,3]}>
    		<WhiteOffset p={[2,2,2,3]} >
    			<H1>charles duong</H1>
    			<H2>product designer</H2>
          <Box>
            <Icolink href='https://twitter.com/hicharlesd' target='_blank' mr={1} color="#1DA1F2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7f959d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </Icolink>
            <Icolink href='https://github.com/ch-d' target='_blank' mx={1} color="#181717">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7f959d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Icolink>
            <Icolink href='mailto:charles@charlesduong.com' target='_blank' mx={1} color="#D14836">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7f959d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </Icolink>
            <Icolink href='http://scapes.charlesduong.com' target='_blank' mx={1} color="#0077B5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7f959d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </Icolink>
          </Box>
          <Main href="http://work.charlesduong.com">
            view design work
          </Main>
          <Moji>👀</Moji>
    		</WhiteOffset>
    	</White>
    </ThemeProvider>
  </div>
)
