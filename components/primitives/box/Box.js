import { Container } from "./styled";

export default function Box({
  width,
  children, 
  margin, 
  marginLeft,
  marginTop,
  background,
}) {
  return (
    <Container
      width={width}
      margin={margin} 
      marginLeft={marginLeft}
      marginTop={marginTop}
      background={background}
    >
      {children}
    </Container>
  );
}