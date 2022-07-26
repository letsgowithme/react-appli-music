import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      body{
        transition: linear 0.25s;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
        font-family: 'Montserrat', sans-serif;
      }
      button {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
        font-family: 'Montserrat', sans-serif;
        padding: 12px 24px;
        cursor: pointer;
      }
      button:hover {
        background-color: ${(props) => props.theme.mainColor};
        color: ${(props) => props.theme.backgroundColor};
      }
      h1 {
        font-size: 1.6rem:
        
      }
      h2 {
        font-size: 1.4rem;
      }
      h1, h2, h3, h4 {
        letter-spacing: 2px;
      }
`;
export default GlobalStyle;