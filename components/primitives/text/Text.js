import { Container } from "./styled";

export default function Text({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
}) {
  return (
    <Container
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
    >
      {children}
    </Container>
  );
}