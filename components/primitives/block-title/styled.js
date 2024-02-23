import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  text-align: ${({$textAlign}) => $textAlign};
  font-size: ${({theme}) => theme.fontSizes[5]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  border-bottom: ${({theme}) => theme.borders.dashedGray};
  letter-spacing: ${({theme}) => theme.letterSpacing[3]}px;
  text-transform: lowercase;
  margin: ${({$margin}) => $margin};
`;