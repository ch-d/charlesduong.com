import { injectGlobal } from 'styled-components';

const baseStyles = () =>
  injectGlobal`
    body {
      font-family: 'Quicksand', -apple-system, BlinkMacSystemFont,
                 'avenir next', avenir,
                 helvetica, 'helvetica neue',
                 ubuntu,
                 roboto, noto,
                 'segoe ui', arial,
                 sans-serif;
      margin:0;
    }
    * {
      transition: all .2s ease-in-out;
    }
  `

export default baseStyles
