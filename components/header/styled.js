import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background: white;
  transition: .3s;
  cursor: pointer;
  ${mediaQuery({
  })}
`;

export const Logo = styled.div`
  display: flex;
  a {
    color: black;
  }
  h1 {
    width: min-content;;
    height: min-content;
    margin: 0;
    font-family: 'Marvel', sans-serif;
    font-weight: 100;
    font-size: 1rem;
  }
  ${mediaQuery({
  })}
`;

export const ActivePage = styled.div`
  font-family: 'Marvel', sans-serif;
  font-size: .8rem;
  letter-spacing: 2px;
  color: white;
  background-color: black;
  width: min-content;
  height: min-content;
  padding: 0 .5rem;
  margin: .1rem 0;
`;