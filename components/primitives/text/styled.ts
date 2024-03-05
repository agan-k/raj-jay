import styled from "styled-components";
import { TextProps } from "./Text";

export const Container = styled.div<TextProps>`
  letter-spacing: ${({$letterSpacing}) => $letterSpacing + 'px'};
  font-size: ${({$fontSize}) => $fontSize + 'px'};
  font-style: ${({$fontStyle}) => $fontStyle};
  font-family: ${({$fontFamily}) => $fontFamily};
  font-weight: ${({$fontWeight}) => $fontWeight};
  text-align: ${({$textAlign}) => $textAlign};
  vertical-align: ${({$verticalAlign}) => $verticalAlign};
  text-transform: ${({$textTransform}) => $textTransform};
  display: ${({$display}) => $display};
  color: ${({$color}) => $color};
  background: ${({$background}) => $background};
  padding: ${({$padding}) => $padding};
  margin: ${({$margin}) => $margin};
  border: ${({$border}) => $border};
  white-space: ${({$whiteSpace}) => $whiteSpace};
`;