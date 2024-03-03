import { Container } from "./styled";

export default function Box({
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
}) {
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