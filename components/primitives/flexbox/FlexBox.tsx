import { ReactNode } from "react";
import { Container } from "./styled";

export interface FlexBoxProps {
  children: ReactNode
  $flexWrap?: string
  $flexDirection?: string 
  $justifyContent?: string 
  $alignContent?: string 
  $alignItems?: string
  $gap?: string
  $width?: string
}

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  $flexWrap,
  $flexDirection, 
  $justifyContent, 
  $alignContent, 
  $alignItems,
  $gap,
  $width,
}) => {
  return (
    <Container 
      $width={$width}
      $flexWrap={$flexWrap}
      $flexDirection={$flexDirection} 
      $justifyContent={$justifyContent} 
      $alignContent={$alignContent}
      $alignItems={$alignItems}
      $gap={$gap}
    >
      {children}
    </Container>
  );
}