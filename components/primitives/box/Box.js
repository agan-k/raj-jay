import { Container } from "./styled";

export default function Box({
  width,
  children, 
  margin, 
  marginLeft,
  marginTop,
}) {
  return (
    <Container
      width={width}
      margin={margin} 
      marginLeft={marginLeft}
      marginTop={marginTop}
    >
      {children}
    </Container>
  );
}