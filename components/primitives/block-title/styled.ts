import styled from "styled-components";
import { BlockTitleProps } from "./BlockTitle";


export const Container = styled.div<BlockTitleProps>`
  padding-left: ${({theme}) => theme.space[2]}px;
  color: ${({theme}) => theme.colors.charcoal};
  text-align: ${({$textAlign}) => $textAlign};
  font-size: ${({theme}) => theme.fontSizes[5]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  border-top: ${({theme}) => theme.borders.dashedGray};
  letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
  text-transform: lowercase;
  margin: ${({$margin}) => $margin};
`;