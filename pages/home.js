import baseStyles from '../constants/baseStyles';
import styled from 'styled-components/';
import { space } from 'styled-system';
import { ThemeProvider } from 'styled-components'
import Heading from '../components/heading';

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

export default () => (
  <div>
    <Heading titleCase=""/>
    <ThemeProvider theme={theme}>
    	<White p={[2,2,2,3]}>
    		<WhiteOffset p={[2,2,2,3]} >
    			<H1>charles duong</H1>
    			<H2>product designer</H2>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7f959d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-camera">
            <rect id="Combined-Shape" x="1" y="9" width="5" height="12" rx="2"></rect>
            <path d="M2,1 C1.44771525,1 1,1.44771525 1,2 L1,5 C1,5.55228475 1.44771525,6 2,6 L5,6 C5.55228475,6 6,5.55228475 6,5 L6,2 C6,1.44771525 5.55228475,1 5,1 L2,1 Z" id="Rectangle-Copy-3"></path>
            <path d="M23,12.1280186 C23,12.127996 22.9999938,12.1279494 23.0000124,12.1280186 C22.4230493,9.98284661 21.1613766,9 19,9 C17.7235576,9 16.8448307,9.30000112 16.3044757,9.86021059 C16.1726827,9.99685159 16.0185815,10.1100496 15.8487812,10.1949497 C15.0228547,10.607913 14.0185361,10.2731401 13.6055728,9.4472136 C13.4685318,9.17313156 13.188399,9 12.881966,9 L10,9 C9.44771525,9 9,9.44771525 9,10 L9,20 C9,20.5522847 9.44771525,21 10,21 L13,21 C13.5522847,21 14,20.5522847 14,20 L14,16 C14,14.8954305 14.8954305,14 16,14 C17.1045695,14 18,14.8954305 18,16 L18,20 C18,20.5522847 18.4477153,21 19,21 L22,21 C22.5522847,21 23,20.5522847 23,20 L23,12.1280186 Z" id="Rectangle-Copy"></path></svg>
          </Icolink>
          <Icolink href='http://scapes.charlesduong.com' target='_blank' mx={1} color="#0077B5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7f959d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          </Icolink>
    		</WhiteOffset>
    	</White>
    </ThemeProvider>
  </div>
)
