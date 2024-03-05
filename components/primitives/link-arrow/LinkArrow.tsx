import { ReactNode } from 'react';
import {Container, Arrow} from './styled';

export interface LinkArrowProps {
  $color?: string
}
export const LinkArrow: React.FC<LinkArrowProps> = ({$color}) => {
  return (
    <Container>
      <Arrow $color={$color}>&nbsp;&rarr;</Arrow>
    </Container>
  )
}