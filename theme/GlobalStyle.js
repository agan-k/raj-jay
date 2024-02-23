import { createGlobalStyle } from "styled-components";
import {theme} from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background: ${({theme}) => theme.colors.background};
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSizes[4]}px;
    color: ${({theme}) => theme.colors.charcoal};
    letter-spacing: ${({theme}) => theme.letterSpacing[1]}px;
  }
  h1, h2, h3, h4 {color: ${({theme}) => theme.colors.charcoal};}
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
