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
export const SeparationLine = styled.div`
margin-top: 16px;
height: 50%;
  border-right: 1px dashed grey;
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
export const NavToggle = styled.div`
  
`;