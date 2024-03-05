import { ReactNode } from "react";
import { Container } from "./styled";

export interface TextProps {
  children: ReactNode
  $display?: string
  $fontFamily?: string
  $fontSize?: number
  $fontStyle?: string
  $fontWeight?: number
  $letterSpacing?: number
  $textAlign?: string
  $verticalAlign?: string
  $textTransform?: string
  $color?: string
  $background?: string
  $padding?: string
  $whiteSpace?: string
  $margin?: string
  $border?: string
}
export const Text: React.FC<TextProps> = ({
  children,
  $display,
  $fontFamily,
  $fontSize,
  $fontStyle,
  $fontWeight,
  $letterSpacing,
  $textAlign,
  $verticalAlign,
  $textTransform,
  $color,
  $background,
  $padding,
  $whiteSpace,
  $margin,
  $border,
}) => {
  return (
    <Container
      $display={$display}
      $fontFamily={$fontFamily}
      $fontSize={$fontSize}
      $fontStyle={$fontStyle}
      $fontWeight={$fontWeight}
      $letterSpacing={$letterSpacing}
      $textAlign={$textAlign}
      $verticalAlign={$verticalAlign}
      $textTransform={$textTransform}
      $color={$color}
      $background={$background}
      $padding={$padding}
      $margin={$margin}
      $whiteSpace={$whiteSpace}
      $border={$border}
    >
      {children}
    </Container>
  );
}
