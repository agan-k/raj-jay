import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  ${mediaQuery({
    display: ['unset', 'flex'],
    justiFyContent: ['unset', 'space-between'],
    paddingTop: [
      ({theme}) => theme.space[2]+'px',
      ({theme}) => theme.space[4]+'px'
    ],
    width: ['100%', '80%'],
    maxWidth: ['unset', '1200px']
  })}
`;

export const Logo = styled.div`
  display: flex;
  min-width: 20%;
  h1 {
    text-transform: uppercase;
    white-space: nowrap;
    margin: 0;
    font-weight: ${({theme}) => theme.fontWeight.thin};
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[3]+'px',
        ({theme}) => theme.fontSizes[4]+'px',
      ],
    })}
  }
  ${mediaQuery({
    marginLeft: ['2%', 'unset'],
  })}
`;

export const ActivePage = styled.div`
  ${mediaQuery({
    fontSize: [
      ({theme}) => theme.fontSizes[2]+'px',
      ({theme}) => theme.fontSizes[3]+'px',
    ],
  })}
  font-weight: ${({theme}) => theme.fontWeight.thin};
  letter-spacing: ${({theme}) => theme.letterSpacing[2]}px;
  color: ${({theme}) => theme.colors.diffused};
  background-color: black;
  height: min-content;
  padding-left: ${({theme}) => theme.space[2]}px;
  padding-right: ${({theme}) => theme.space[1]}px;
`;