import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  font-family: ${({theme}) => theme.fonts.press};
  p {
    font-size: ${({theme}) => theme.fontSizes[4]}px;
  }
  p:nth-child(2) {
    font-size: ${({theme}) => theme.fontSizes[3]}px;
    text-align: right;
    margin: 0;
    margin-top: ${({theme}) => theme.space[1]}px;
    margin-bottom: ${({theme}) => theme.space[5]}px;
  }
  p:nth-child(1) {
    margin: 0;
 }
`;
