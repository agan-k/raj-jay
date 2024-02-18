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
  align-items: center;
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
`;

export const CardContainer = styled.div`
background: white;
  min-height: min-content;
  padding: 12px;
  flex-basis: 33%;
  text-decoration: none;
  cursor: pointer;
  border: 1px dashed white;
  &:hover {
    border: 1px dashed grey;
    // box-shadow: 0px 0px 9px 1px rgb(227, 227, 227);
    transition: .7s
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  img {
    max-width: 100%;
  }
`;

  
export const Date = styled.div`

`;
export const Blurb = styled.div`

`;