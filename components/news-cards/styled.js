import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Wrapper = styled.div`
  margin 0 auto;
  background: red;
  `;
  export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  &::after {
    content: "";
    flex: auto;
  }
`;

export const CardContainer = styled.div`
  min-height: min-content;
  margin: 0 .2rem;
  flex-basis: 45%;
  padding: 1rem;
  text-decoration: none;
  opacity: .7;
  transition: .2s;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(245, 245, 245);
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 9px 1px rgb(238, 238, 238);
    transition: .2s
  }
  a {
    color:rgb(73, 73, 73);
    transition: .3s;
  }
  &:hover a {
    transition: .3s;
  }
  img {
    width: 100%;
  }
  h3 {
    font-size: 1.2rem;
    margin: .5rem 0;
  }
`;
  
export const Date = styled.div`
  margin-bottom: .5rem;

`;
export const Blurb = styled.div`
  margin-bottom: .5rem;
  font-size: .8rem;

`;
export const Arrow = styled.span`
  display: block;
  text-align: right;
`;