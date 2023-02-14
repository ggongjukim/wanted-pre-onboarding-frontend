import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body{
    height:100vh;
  }
  body{
    margin: 0;
    padding: 0;

    font-family:  'Noto Sans KR', sans-serif;
    font-weight: normal;
    font-size: ${(props) => props.theme.fontsize.middle};
    color: ${(props) => props.theme.colors.text[0]};
  }
  h1{
    font-weight: 500;
    font-size: ${(props) => props.theme.fontsize.big};
  }
  h3{
    font-weight: normal;
    font-size: ${(props) => props.theme.fontsize.middle};
  }
  a{
    text-decoration:none;
    color: ${(props) => props.theme.colors.text[0]};
    box-sizing:border-box;
  }
  button{
    cursor: pointer;
    border:0;
    outline:0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  div{
    box-sizing:border-box;
  }

`;
export default GlobalStyles;
