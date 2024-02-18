import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";
import { Z_INDEX } from "../../utils/constants";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 1rem;
  background: white;
  transition: .3s;
  cursor: pointer;
  ${mediaQuery({
  })}
`;

export const Logo = styled.div`
  display: flex;
  min-width: 20%;
  a {
    color: black;
  }
  h1 {
    text-transform: uppercase;
    white-space: nowrap;
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