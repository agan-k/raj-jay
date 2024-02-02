import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: ${({isNavOpen}) => isNavOpen ? '6.5rem' : '1.5rem'};
  transition: .3s;
`;
export const NavRoutes = styled.nav`
width: 45%;
margin-top: 2rem;
ul {
  height: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  width: 100%;
  padding: 0;
  list-style: none;
  background: white;
}
`;
export const NavItem = styled.li`
  display: ${({active}) => active ? 'none' : 'initial'};
  a {
    letter-spacing: .1rem;
    font-size: .6rem;
    font-weight: 100;
    text-transform: lowercase;
    color: grey;
    padding: 0 .2rem;
    transition: .2s;
  }
  &:hover a {
    background: black;
    color: white;
    transition: .2s;
  }
`;
export const SocialAndMailingWrapper = styled.div`
  width: 45%;
  margin: 2rem 0 0 0;
`;
export const SocialIcons = styled.div`
  width: 100%;
  height: 1.7rem;
  margin: 0;
  img {
    display: inline;
    height: 100%;
    padding: .2rem .2rem .2rem 0;
    opacity: .7;
    cursor: pointer;
  }
  &:hover img {
    opacity: 1;
    transition: .2s;
  }
`;
export const NavToggle = styled.div`
  
`;