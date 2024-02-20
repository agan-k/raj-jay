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
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
`;

export const CardContainer = styled.div`
  background: white;
  min-height: min-content;
  padding: 8px;
  flex-basis: 33%;
  text-decoration: none;
  cursor: pointer;
  border: 1px dashed white;
  &:hover {
    background: #e0e0e0;
    transition: .3s
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    opacity: .9;
    padding: 4px;
  }
  `;
  
  
  export const Date = styled.div`
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 8px;
  // border-top: 1px dashed grey;
`;
export const Blurb = styled.div`

`;