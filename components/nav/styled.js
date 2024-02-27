import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: ${({theme}) => theme.transitions.fast};
  ${mediaQuery({
    // background: [({theme}) => theme.colors.diffused, 'unset'],

    width: ['unset', '100%'],
    position: ['relative', 'unset'],
    height: 
    [
      ({$isNavOpen, theme}) => $isNavOpen ? 'unset' : '0',
      ({$isNavOpen, theme}) => $isNavOpen ? theme.space[6]+theme.space[5]+6+'px' : theme.space[4]+4+'px',
      //dev to keep nav open: 
      // ({theme}) => theme.space[6]+theme.space[5]+6+'px',
    ],
    flexDirection: ['column', 'row'],
    gap: [({theme}) => theme.space[1]+'px', 'unset'],
    alignItems: ['end', 'unset']
  })}
`;

export const NavRoutes = styled.nav`
  margin-top: ${({theme}) => theme.space[5]}px;
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    ${mediaQuery({
      flexDirection: ['row', 'column'],
      justifyContent: ['unset', 'unset'],
      gap: [
        ({theme}) => theme.space[3]+5+'px',
        ({theme}) => theme.space[2]+'px'
      ],
      height: [
        'unset',
        ({theme}) => theme.space[6]+'px',
      ],
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
    verticalAlign: ['center', 'unset'],
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
        ({theme}) => theme.fontSizes[2]+'px',
      ],
      padding: [
        ({theme}) => `${theme.space[3]}px 0`,
        ({theme}) => `0 ${theme.space[3]}px`,
      ],
    })}
  }
  &:hover a {
    background: black;
    color: white;
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
  height: ${({theme}) => theme.space[6]+theme.space[5]}px;
  display: flex;
  ${mediaQuery({
    width: [
      '99%',
      'unset'
    ],
    alignItems: ['unset', 'end'],
    justifyContent: ['start', 'unset'],
    margin: [
      ({theme}) => `${theme.space[5]}px 0 ${theme.space[7]}px`,
       'unset'
    ],
  })}
`;

export const MailingListLabel = styled.div`
  margin-top: 1px;
  letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  text-transform: lowercase;
  white-space: nowrap;
  ${mediaQuery({
    marginTop: ['unset', '1px'],
    fontSize: [
      ({theme}) => theme.fontSizes[6]+'px',
      ({theme}) => theme.fontSizes[2]+'px',
    ],
  })}
`;