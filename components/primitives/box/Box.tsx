import { ReactNode } from "react";
import { Container } from "./styled";

export interface BoxProps {
  children: ReactNode
  $position?: string
  $flex?: string
  $width?: string
  $height?: string
  $margin?: string 
  $padding?: string 
  $marginLeft?: number
  $marginTop?: number
  $marginBottom?: number
  $paddingBottom?: number
  $background?: string
  $border?: string

}
export const Box: React.FC<BoxProps> = ({
  children, 
  $position,
  $flex,
  $width,
  $height,
  $margin, 
  $padding, 
  $marginLeft,
  $marginTop,
  $marginBottom,
  $paddingBottom,
  $background,
  $border
}) => {
  return (
    <Container
      $position={$position}
      $flex={$flex}
      $width={$width}
      $height={$height}
      $margin={$margin} 
      $padding={$padding} 
      $marginLeft={$marginLeft}
      $marginTop={$marginTop}
      $marginBottom={$marginBottom}
      $paddingBottom={$paddingBottom}
      $background={$background}
      $border={$border}
    >
      {children}
    </Container>
  );
}