import baseStyles from '../constants/baseStyles';
import Social from '../components/social';
import styled from 'styled-components/';
import { space } from 'styled-system';
import { ThemeProvider } from 'styled-components'

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
  ${space}
`

const WhiteOffset = styled.div`
	background-color:#FAFAFA;
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

export default () => (
  <ThemeProvider theme={theme}>
  	<White>
  		<WhiteOffset p={[2,2,2,3]} m={[2,2,2,3]}>
  			<H1>charles duong</H1>
  			<H2>product designer</H2>
        <Social
          url='https://twitter.com/hicharlesd'
          site='twitter'
          color='1DA1F2'
        />
        <Social
          url='https://linkedin.com/in/charlesduong'
          site='linkedin'
          color='0077B5'
        />
        <Social
          url='https://github.com/ch-d'
          site='github'
          color='181717'
        />
        <Social
          url='mailto:charles@charlesduong.com'
          site='gmail'
          color='D14836'
        />
  		</WhiteOffset>
  	</White>
  </ThemeProvider>
)
