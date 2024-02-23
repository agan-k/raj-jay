import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: ${({$isNavOpen, theme}) => $isNavOpen ? theme.space[6]+theme.space[5]+6 : theme.space[4]+4}px;
  transition: ${({theme}) => theme.transitions.fast};
`;

export const NavRoutes = styled.nav`
  margin-top: 2rem;
  ul {
    height: ${({theme}) => theme.space[6]}px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    width: 100%;
    padding: 0;
    list-style: none;
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const NavItem = styled.li`
  display: ${({$active}) => $active ? 'none' : 'initial'};
  // margin-right: 16px;
  a {
    letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
    font-size: ${({theme}) => theme.fontSizes[2]}px;
    font-weight: 100;
    text-transform: lowercase;
    padding-left: ${({theme}) => theme.space[3]}px;
    padding-right: ${({theme}) => theme.space[3]}px;
    color: ${({theme}) => theme.colors.charcoal}
  }
  &:hover a {
    background: black;
    color: white;
  }
`;

export const SeparationLine = styled.div`
  margin-top: ${({theme}) => theme.space[5] -6}px;
  height: ${({theme}) => theme.space[6] -6}px;
  width: ${({theme}) => theme.space[4]+theme.space[3]}px;
  border-right: ${({theme}) => theme.borders.dashedGray};
`;

export const MailingListWrapper = styled.div`
  height: ${({theme}) => theme.space[6]+theme.space[5]}px;
  display: flex;
  align-items: end;
`;

export const MailingListLabel = styled.div`
  letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  text-transform: lowercase;
  padding-left: ${({theme}) => theme.space[3]}px;
  padding-right: ${({theme}) => theme.space[3]}px;
  white-space: nowrap;
`;