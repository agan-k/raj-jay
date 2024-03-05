import { ReactNode } from "react";
import { Container } from "./styled";

export interface BlockTitleProps {
  children: ReactNode
  $margin?: string
  $textAlign?: string
}

export const BlockTitle: React.FC<BlockTitleProps> = ({
  children, 
  $margin,
   $textAlign
}) => {
  return (
    <Container $margin={$margin} $textAlign={$textAlign}>
      {children}
    </Container>
  );
}