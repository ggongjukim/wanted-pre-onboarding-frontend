import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body{
    height:100vh;
  }
  body{
    margin: 0;
    padding: 0;

    font-family:  'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: 36pt;
    color: ${(props) => props.theme.colors.text[0]};
  }
  h1{
    font-weight: 500;
    font-size: 36pt;
  }
  h3{
    font-weight: bold;
    font-size: 24pt;
  }
  a{
    text-decoration:none;
    color: ${(props) => props.theme.colors.text[0]};
    box-sizing:border-box;
  }
  button{
    cursor: pointer;
    background-color : ${(props) => props.theme.colors.green[0]};
    color:  ${(props) => props.theme.colors.text[2]};
    font-family:  'Noto Sans KR', sans-serif;
    border: 0;
  }

`;
export default GlobalStyles;
