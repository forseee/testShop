import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    
  }

  *::before,
  *::after {

  }
  p{
    margin: 0;
    padding: 0;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body {
    background: ${({ theme }) => theme.colors.background.main};
    height: 100vh;
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHeight.small};
    
    --onboard-connect-sidebar-background: ${({ theme }) =>
      theme.colors.background.main};
  }
  #root{
    height: 100%;
    position: relative;
    
  }

  button{
    margin: 0;
  }

`;

export const Conteiner = styled.div`
  max-width: 1380px;
  padding: 0 20px;
  margin: 0 auto;
`;
