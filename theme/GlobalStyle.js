import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0 auto;
    background: ${({theme}) => theme.colors.background};
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSizes[4]}px;
    color: ${({theme}) => theme.colors.text};
    letter-spacing: ${({theme}) => theme.letterSpacing[1]}px;
  }
  
  p {
    color: ${({theme}) => theme.colors.charcoal};
    line-height: ${({theme}) => theme.lineHeight.paragraph};
  ;}
  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.link};
    &:hover {
      text-decoration: underline;
      transition: ${({theme}) => theme.transitions.fast};
    }
  }
  li {
    list-style: none;
  }
`;
