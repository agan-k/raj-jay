import styled from "styled-components";
import { LinkArrowProps } from "./LinkArrow";

export const Container = styled.div`
  height: ${({theme}) => theme.space[4]}px;
  width: ${({theme}) => theme.space[4]}px;
  display: flex;
  justify-content: end;
`;

export const Arrow = styled.div<LinkArrowProps>`
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  transform: rotate(-45deg);
  color: ${({$color}) => $color};
  font-weight: ${({theme}) => theme.fontWeight.thin};
`;