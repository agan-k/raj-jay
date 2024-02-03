import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 40%;
  animation: quote_fade 10s infinite;
  p {
    color: rgb(221, 221, 221);
    font-size:c 1rem;
    letter-spacing: 2px;
  }
  & p:nth-child(2) {
    font-size: .8rem;
    text-align: right;
  }
`;
