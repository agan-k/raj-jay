import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";
import { Z_INDEX } from "../../utils/constants";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  ${mediaQuery({
    width: ['unset', '100%'],
    position: ['fixed', 'unset'],
    top: ['0', 'unset'],
    background: [({theme}) => theme.colors.subtle, 'unset'],
    zIndex: [Z_INDEX.mobileNav, 'unset'],
    height: 
    [
      ({$isNavOpen}) => $isNavOpen ? '100%' : '0',
      ({$isNavOpen, theme}) => $isNavOpen ? theme.space[6]+theme.space[5]+6+'px' : theme.space[4]+4+'px',
      //dev to keep nav open: 
      // ({theme}) => theme.space[6]+theme.space[5]+'px',
    ],
    flexDirection: ['column', 'row'],
    gap: [({theme}) => theme.space[1]+'px', 'unset'],
    justifyContent: ['unset', 'space-between'],
    transition: [
      'unset',
      ({theme}) => theme.transitions.fast,
    ]
  })}
`;

export const NavRoutes = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    ${mediaQuery({
      flexDirection: ['row', 'column'],
      justifyContent: ['space-between', 'unset'],
      gap: [
        ({theme}) => theme.space[3]+5+'px',
        ({theme}) => theme.space[2]+'px'
      ],
      height: [
        'unset',
        ({theme}) => theme.space[6]+'px',
      ],
      paddingTop: [
        ({theme}) => theme.space[5]+12+'px',
        'unset'
      ],
      marginTop: [
        'unset',
        ({theme}) => theme.space[4]+12+'px'
      ],
      marginRight: [
        ({theme}) => theme.space[2]+'px',
        'unset'
      ],
      textAlign: ['right', 'unset']
    })}
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const NavItem = styled.li`
  display: ${({$active}) => $active ? 'none' : 'initial'};
  ${mediaQuery({
    width: ['43%', 'unset'],
    padding: [
      ({theme}) => `${theme.space[2]}px 0 0 4px`,
      ({theme}) => `0 ${theme.space[2]}px`,
    ],
  })}
  a {
    letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
    font-weight: ${({theme}) => theme.fontWeight.thin};
    text-transform: lowercase;
    color: ${({theme}) => theme.colors.charcoal};
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[6]+'px',
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
      background: ['unset', 'black'],
      color: ['unset', 'white']
    })}
  }
`;

export const SeparationLine = styled.div`
  margin-top: ${({theme}) => theme.space[5] -6}px;
  height: ${({theme}) => theme.space[6] -6}px;
  border-right: ${({theme}) => theme.borders.dashedGray};
  ${mediaQuery({
    display: ['none', 'initial']
  })}
`;

export const MailingListWrapper = styled.div`
  height: ${({theme}) => theme.space[6]+theme.space[4]+theme.space[3]+1}px;
  display: flex;
  ${mediaQuery({
    width: [
      '80%',
      'unset'
    ],
    alignItems: ['unset', 'end'],
    justifyContent: ['start', 'unset'],
    margin: [
      ({theme}) => `${theme.space[3]}px auto ${theme.space[7]}px`,
       'unset'
    ],
  })}
`;

export const MailingListLabel = styled.div`
  letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  text-transform: lowercase;
  white-space: nowrap;
  ${mediaQuery({
    marginTop: ['unset', '1px'],
    fontSize: [
      ({theme}) => theme.fontSizes[6]+'px',
      ({theme}) => theme.fontSizes[3]+'px',
    ],
  })}
`;