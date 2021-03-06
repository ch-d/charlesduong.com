import { injectGlobal, styled } from 'styled-components';
import colors from '../constants/colors';

const baseStyles = () =>
  injectGlobal`
    @import url(//rsms.me/inter/inter-ui.css);
    @import url(//fonts.googleapis.com/css?family=IBM+Plex+Sans:100,200,300,400,500,600,700);
    html {
      background-color: #9CB7C0;
    }
    body {
      font-family: 'Inter UI', -apple-system, BlinkMacSystemFont,
                 'avenir next', avenir,
                 helvetica, 'helvetica neue',
                 ubuntu,
                 roboto, noto,
                 'segoe ui', arial,
                 sans-serif;
      margin:0;
      background-color: #fff;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont,
      'avenir next', avenir,
      helvetica, 'helvetica neue',
      ubuntu,
      roboto, noto,
      'segoe ui', arial,
      sans-serif;
    }
    p a:link {
      border-bottom:2px solid #0000EE;
      text-decoration:none;
      display:inline-block;
      line-height:1rem;
    }
    p a:hover, p a:focus {
      padding-bottom:2px;
    }
    p a:visited, p a:active {
      border-bottom:2px solid #551A8B
      text-decoration:none;
    }
    * {
      transition: all .2s ease-in-out;
    }
    ::selection {
      background: #FFFBCC;
    }
    strong {
      font-weight:700
    }
  `
export default baseStyles
