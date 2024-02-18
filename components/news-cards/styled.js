import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Wrapper = styled.div`
  margin 0 auto;
  background: red;
  `;
  export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  flex-wrap: wrap;
  // margin-top: 1rem;
  &::after {
    content: "";
    flex: auto;
  }
`;

export const CardContainer = styled.div`
background: white;
  min-height: min-content;
  padding: 0 12px 12px;
  flex-basis: 33%;
  text-decoration: none;
  cursor: pointer;
  border: 1px dashed white;
  &:hover {
    border: 1px dashed grey;
    // box-shadow: 0px 0px 9px 1px rgb(227, 227, 227);
    transition: .7s
  }
  img {
    max-width: 150px;
  }
`;
  
export const Date = styled.div`

`;
export const Blurb = styled.div`

`;