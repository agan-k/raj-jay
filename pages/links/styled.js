import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding-right: 2%;
`;

export const LinkCard = styled.div`
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