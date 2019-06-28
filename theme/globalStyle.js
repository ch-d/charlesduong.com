import { createGlobalStyle } from "styled-components";
import { theme } from "./index";

const GlobalStyle = createGlobalStyle`
    @import url(//rsms.me/inter/inter-ui.css);
    @import url(//fonts.googleapis.com/css?family=IBM+Plex+Sans:100,200,300,400,500,600,700);
    html {
      background-color: ${props =>
        props.color ? theme.colors[props.color][50] : theme.colors.green[50]};
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
      color: ${theme.colors.blue[800]};
      border-bottom:2px solid ${theme.colors.blue[800]};
      text-decoration:none;
      display:inline-block;
      line-height:1rem;
    }
    p a:hover, p a:focus {
      padding-bottom:2px;
      margin-bottom:-2px;
    }
    p a:visited, p a:active {
      color: ${theme.colors.purple[800]};
      border-bottom:2px solid ${theme.colors.purple[800]};
      text-decoration:none;
    }
    * {
      transition: all .2s ease-in-out;
    }
    ::selection {
      background: ${props =>
        props.color ? theme.colors[props.color][20] : theme.colors.green[20]};
        // color: #fff
    }
    strong {
      font-weight:700
    }
`;

export default GlobalStyle;
