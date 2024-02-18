import { Container } from "./styled";

export default function Box({
  position,
  width,
  children, 
  margin, 
  padding, 
  marginLeft,
  marginTop,
  marginBottom,
  paddingBottom,
  background,
  border
}) {
  return (
    <Container
      position={position}
      width={width}
      margin={margin} 
      padding={padding} 
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      paddingBottom={paddingBottom}
      background={background}
      border={border}
    >
      {children}
    </Container>
  );
}