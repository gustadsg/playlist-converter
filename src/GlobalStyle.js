import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 18px;
  }

  h1{
    font-size: 48px;
    color: #4C63BB;
  }

  h1,h2,h3,h4{
    color: #4C63BB;
  }
`;

export default GlobalStyle;
