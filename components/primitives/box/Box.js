import { Container } from "./styled";

export default function Box({
  position,
  width,
  children, 
  margin, 
  padding, 
  marginLeft,
  marginTop,
  paddingBottom,
  background,
}) {
  return (
    <Container
      position={position}
      width={width}
      margin={margin} 
      padding={padding} 
      marginLeft={marginLeft}
      marginTop={marginTop}
      paddingBottom={paddingBottom}
      background={background}
    >
      {children}
    </Container>
  );
}