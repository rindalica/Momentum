import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: 'Nanum Gothic', 'Montoserrat', sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
