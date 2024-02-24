import { Text } from "../../../components";
import { Container } from "./styled";

export default function Block({
  children,
  $padding, 
  $marginTop, 
  $marginBottom, 
  $textAlign,
  $background
}) {
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