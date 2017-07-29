import { injectGlobal, styled } from 'styled-components';
import colors from '../constants/colors';

const baseStyles = () =>
  injectGlobal`
    body {
      font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
                 'avenir next', avenir,
                 helvetica, 'helvetica neue',
                 ubuntu,
                 roboto, noto,
                 'segoe ui', arial,
                 sans-serif;
      margin:0;
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
  `

export default baseStyles
