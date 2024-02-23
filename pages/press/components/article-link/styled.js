import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.li`
  display: flex;
  list-style: none;
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  font-style: italic;
  padding-left: ${({theme}) => theme.space[1]}px;
  margin-left: ${({$marginLeft}) => $marginLeft};
  pointer-events: ${({$pointerEvents}) => $pointerEvents};
  h3 {
    margin-top: ${({theme}) => theme.space[3]}px;
    margin-bottom: 0;
  }
  h4 {
    margin: 0;
    font-weight: ${({theme}) => theme.fontWeight.thin};
  }
`;
