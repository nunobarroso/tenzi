import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Karla', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #0B2434;
    padding: 20px;
    overflow: hidden;
  }

  h1 {
    font-size: 40px;
    margin: 0;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 0;
    text-align: center;
  }
`;

export default GlobalStyles;
