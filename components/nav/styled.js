import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
overflow: hidden;
height: ${props => props.navShow ? '6.5rem' : '6.5rem'};
transition: .2s;
`;
export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  text-align: right;
  margin: 0;
  padding-top: 2rem;
  border: none;
`;
export const NavItem = styled.li`
letter-spacing: .1rem;
font-size: .9rem;
font-weight: 100;
text-transform: lowercase;
a {
  color: grey;
  padding: 0 .2rem;
}
&:hover a {
  background: black;
  color: white;
  transition: .2s;

}
`;
export const NavigationWrapper = styled.ul`
  flex: 4;
  height: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  background: white;
`;
export const SocialWrapper = styled.ul`
flex: 1;
height: 4rem;
display: flex;
// flex-direction: column;
align-items: flex-start;
margin: 0;
padding: 0;
list-style: none;
background: white;
`;
export const SocialIcon = styled.div`
img {
  height: 20px;
  margin: 0;
}
`;
export const NavToggle = styled.div`
  
`;