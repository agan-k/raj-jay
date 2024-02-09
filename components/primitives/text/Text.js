import { Container } from "./styled";

export default function Text({
  children,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  verticalAlign,
  textTransform,
  color,
  padding,
  whiteSpace,
}) {
  return (
    <Container
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      verticalAlign={verticalAlign}
      textTransform={textTransform}
      color={color}
      padding={padding}
      whiteSpace={whiteSpace}
    >
      {children}
    </Container>
  );
}
