import { ReactNode } from "react";
import { Container } from "./styled";

export interface BlockProps {
  children: ReactNode
  $padding?: string
  $marginTop?: number
  $marginBottom?: number
  $textAlign?: string
  $background?: string
}

export const Block: React.FC<BlockProps> = ({
  children,
  $padding, 
  $marginTop, 
  $marginBottom, 
  $textAlign,
  $background
}) => {
  return (
    <Container 
      $padding={$padding}
      $marginTop={$marginTop} 
      $marginBottom={$marginBottom} 
      $textAlign={$textAlign}
      $background={$background}>
      {children}
    </Container>
  );
}