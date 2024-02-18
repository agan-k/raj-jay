import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  img {
    float: left;
    margin: .3rem 1rem 1rem 0;
    max-height: 10rem;
  }
  a {
    color: grey;
    text-decoration: underline;
    &:hover {
      color: black;
      transition: .3s;
    }
  }
`;