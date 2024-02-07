import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.li`
  display: flex;
  list-style: none;
  font-size: .8rem;
  font-style: italic;
  padding: 0 0 .5rem 0;
  // margin-bottom: 1rem;
  margin-left: ${({marginLeft}) => marginLeft};
  h3 {
    margin: .5rem 0 0;
  }
  h4 {
    margin: 0;
  }
  a {
    color: grey;
    &:hover {
      color: black;
      transition: .2s;
    }
  }
`;
