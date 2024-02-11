import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding-left: 2%;
  margin-bottom: 16px;
`;

export const Card = styled.div`
  color: grey;
  width: 15%;
  height: min-content;
  margin: .2rem;
  padding: .5rem;
  a {
    color: grey;
    &:hover {
      color: initial;
    }
  }
`;