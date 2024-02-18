import { Container } from "./styled";

export default function Text({
  children,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  textAlign,
  verticalAlign,
  textTransform,
  color,
  background,
  padding,
  whiteSpace,
  margin,
  border,
}) {
  return (
    <Container
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      verticalAlign={verticalAlign}
      textTransform={textTransform}
      color={color}
      background={background}
      padding={padding}
      margin={margin}
      whiteSpace={whiteSpace}
      border={border}
    >
      {children}
    </Container>
  );
}
