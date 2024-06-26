import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";
import { Z_INDEX } from "../../utils/constants";
import { NavProps } from "./Nav";

export const Container = styled.div<NavProps>`
  display: flex;
  overflow: hidden;
  ${mediaQuery({
    width: ['unset', '85%'],
    position: ['fixed', 'unset'],
    top: ['0', 'unset'],
    
    background: [({theme}) => theme.colors.subtle, 'unset'],
    zIndex: [Z_INDEX.mobileNav, 'unset'],
    height: 
    [
      ({$isNavOpen}) => $isNavOpen ? '100%' : '0',
      ({$isNavOpen, theme}) => $isNavOpen ? 
      ({theme}) => theme.space[6]+16+'px' : '0',
      //dev to keep nav open: 
      // ({theme}) => theme.space[6]+16+'px', // lg screen
    ],
    flexDirection: ['column', 'row'],
    gap: [
      ({theme}) => theme.space[1]+'px',
      ({theme}) => theme.space[6]+'px',
    ],
    justifyContent: ['unset', 'end'],
    transition: [
      'unset',
      ({theme}) => theme.transitions.fast,
    ]
  })}
`;

export const NavRoutes = styled.nav`
  ${mediaQuery({
    width: ['unset', '80%']
  })}
  ul {
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    ${mediaQuery({
      display: ['flex', 'flex'],
      flexDirection: ['row', 'column'],
      gap: [
        'unset',
        ({theme}) => theme.space[2]+'px',
      ],
      height: [
        'initial',
        ({theme}) => theme.space[6]+'px',
      ],
      paddingTop: [
        ({theme}) => theme.space[5]+'px',
        'unset'
      ],
      marginTop: [
        ({theme}) => theme.space[4]+'px',
        ({theme}) => theme.space[3]+'px',
      ],
      textAlign: ['center', 'unset']
    })}
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const NavItem = styled.li`
  ${mediaQuery({
    width: ['40%', '20%'],
    border: [
      ({theme}) => `1px solid ${theme.colors.diffused}`,
      'unset',
    ],
    margin: [
      '4px auto',
      'unset'
    ],
    padding: [
      ({theme}) => `${theme.space[3]}px 0`,
      0,
    ],
    background: [
      'unset',
      ({theme}) => theme.colors.input
    ]
  })}
  a {
    letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
    font-weight: ${({theme}) => theme.fontWeight.thin};
    text-transform: lowercase;
    color: ${({theme}) => theme.colors.charcoal};
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[5]+'px',
        ({theme}) => theme.fontSizes[3]+'px',
      ],
      padding: [
        ({theme}) => `${theme.space[3]}px 0`,
        ({theme}) => `0 ${theme.space[3]}px`,
      ],
    })}
  }
  &:hover a {
    ${mediaQuery({
      color: ['unset', 'white']
    })}
  }
  &:hover {
    ${mediaQuery({
      background: ['unset', 'black'],
    })}
  }
`;

export const MailingListWrapper = styled.div`
  height: ${({theme}) => theme.space[6]+theme.space[4]+theme.space[3]+1}px;
  display: flex;
  ${mediaQuery({
    flexDirection: ['column', 'row'],
    width: [
      '80%',
      '20%'
    ],
    alignItems: ['unset', 'unset'],
    justifyContent: ['center', 'end'],
    margin: [
      ({theme}) => `${theme.space[5]}px auto ${theme.space[7]}px`,
      ({theme}) => `${theme.space[3]}px 0`,
    ],
  })}
`;

export const MailingListLabel = styled.div`
  letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  text-transform: lowercase;
  white-space: nowrap;
  ${mediaQuery({
    fontSize: [
      ({theme}) => theme.fontSizes[5]+'px',
      ({theme}) => theme.fontSizes[3]+'px',
    ],
    textAlign: ['center', 'initial']
  })}
`;