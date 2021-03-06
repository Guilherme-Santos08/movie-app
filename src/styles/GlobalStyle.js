import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #14274E;
    color: white;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    padding: 0 10px 12px;
  }
`;
