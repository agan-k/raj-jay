import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

interface HeaderProps {
  $disabled?: boolean
  $isNavOpen?: boolean
}

export const Container = styled.header<Pick<HeaderProps, '$disabled'>>`
  margin: 0 auto;
  ${mediaQuery({
    pointerEvents: [
      'unset', 
      ({$disabled}) => $disabled ? 'none' : 'initial'
    ],
    display: ['unset', 'block'],
    justiFyContent: ['unset', 'space-between'],
    paddingTop: [
      'unset',
      ({theme}) => theme.space[3]+'px'
    ],
    width: ['100%', '90%'],
    maxWidth: ['unset', '1200px']
  })}
`;

export const Logo = styled.div`
  display: flex;
  min-width: 20%;
  background-size: cover;
  background-color: black;
  color: ${({theme}) => theme.colors.diffused};
  ${mediaQuery({
    background: [
      'black',
      `url('/images/header.png')`,
    ],
    borderTopRightRadius: ['none', '50px 50px'],
    height: ['32px', 'unset'],
    padding: ['6px 0 0', '8px'],
  })}
  h1 {
    text-transform: uppercase;
    white-space: nowrap;
    margin: 0;
    font-weight: ${({theme}) => theme.fontWeight.thin};
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[5]+'px',
        ({theme}) => theme.fontSizes[4]+'px',
      ],
    })}
  }
`;

export const ActivePage = styled.div<Pick<HeaderProps, '$isNavOpen'>>`
  ${mediaQuery({
    minWidth: ['unset', ({theme}) => theme.space[6]+24+'px'],
    textAlign: [
      'unset', 
      ({$isNavOpen}) => $isNavOpen ? 'center' : 'initial',
    ],
    marginTop: ['2px', '1px'],
    padding: [
      '0',
      ({theme, $isNavOpen}) => $isNavOpen ?
        `0 ${theme.space[2]}px` : '0',
    ],
    fontSize: [
      ({theme}) => theme.fontSizes[4]+'px',
      ({theme}) => theme.fontSizes[3]+'px',
    ],
    color: [
      ({theme}) => theme.colors.diffused,
      ({theme, $isNavOpen}) => $isNavOpen ? 
        theme.colors.charcoal : theme.colors.diffused,
    ],
    backgroundColor: [
      'unset',
      ({theme, $isNavOpen}) => $isNavOpen ? theme.colors.diffused : '',
    ],
  })}
  font-weight: ${({theme}) => theme.fontWeight.thin};
  letter-spacing: ${({theme}) => theme.letterSpacing[2]}px;
  height: min-content;
`;