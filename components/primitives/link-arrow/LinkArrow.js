import {Container, Arrow} from './styled';

export default function LinkArrow({$color}) {
  return (
    <Container>
      <Arrow $color={$color}>&nbsp;&rarr;</Arrow>
    </Container>
  )
}