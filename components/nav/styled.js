import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";
import { Z_INDEX } from "../../utils/constants";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  ${mediaQuery({
    position: ['fixed', 'unset'],
    top: ['0', 'unset'],
    paddingTop: ['unset', '8px'],
    background: [({theme}) => theme.colors.subtle, 'unset'],
    zIndex: [Z_INDEX.mobileNav, 'unset'],
    height: 
    [
      ({$isNavOpen}) => $isNavOpen ? '100%' : '0',
      ({$isNavOpen, theme}) => $isNavOpen ? 
      ({theme}) => theme.space[7]-theme.space[4]+'px' : theme.space[4]+4+'px',
      //dev to keep nav open: 
      // ({theme}) => theme.space[7]-theme.space[4]+'px', // lg screen
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
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    ${mediaQuery({
      display: ['flex', 'flex'],
      flexDirection: ['row', 'column'],
      gap: [
        'unset',
        ({theme}) => theme.space[2]+'px'
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
        ({theme}) => theme.space[4]+12+'px'
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
    width: ['40%', 'unset'],
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
      background: ['unset', 'black'],
      color: ['unset', 'white']
    })}
  }
`;

export const SeparationLine = styled.div`
  height: 50%;
  align-self: end;
  margin-bottom: ${({theme}) => theme.space[4]}px;
  border-right: ${({theme}) => theme.borders.dashedGray};
  ${mediaQuery({
    display: [
      'none', 
      ({$isNavOpen}) => $isNavOpen ? 'block' : 'none',
    ],
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
    justifyContent: ['center', 'unset'],
    margin: [
      ({theme}) => `${theme.space[4]}px auto ${theme.space[7]}px`,
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
      ({theme}) => theme.fontSizes[5]+'px',
      ({theme}) => theme.fontSizes[3]+'px',
    ],
    textAlign: ['center', 'initial']
  })}
`;