import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: ${({isNavOpen}) => isNavOpen ? '6.5rem' : '1.5rem'};
  transition: .3s;
`;
export const NavRoutes = styled.nav`
width: 50%;
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
    font-size: .8rem;
    text-transform: lowercase;
    color: grey;
    padding: 0 .5rem;
    transition: .2s;
  }
  &:hover a {
    background: black;
    color: white;
    transition: .2s;
  }
`;
export const SocialAndMailingWrapper = styled.div`
  width: 40%;
  display: flex;
  margin-top: 2rem;
`;
export const SocialIcons = styled.div`
  width: 100%;
  height: 1.7rem;
  margin: 0;
  // img {
  //   display: inline;
  //   height: 100%;
  //   padding: .2rem .2rem .2rem 0;
  //   opacity: .7;
  //   cursor: pointer;
  // }
  // &:hover img {
  //   opacity: 1;
  //   transition: .2s;
  // }
`;
export const NavToggle = styled.div`
  
`;