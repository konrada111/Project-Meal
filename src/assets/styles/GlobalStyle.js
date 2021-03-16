import { createGlobalStyle } from 'styled-components';
import 'assets/styles/fonts.css';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    
  }
  
  *,*::after,*::before{
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  
  body{
    font-family: 'Raleway', sans-serif;  }
  
  a, button{
    font-family: 'Raleway', sans-serif;  }
`;
