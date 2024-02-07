import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  p {
    font-size: .8rem;
  }
  p:nth-child(2) {
    color: black;
    font-size: .7rem;
    text-align: right;
    margin: 0;
    margin-bottom: 1.5rem;
 }
 p:nth-child(1) {
    margin: 0;
 }
`;
