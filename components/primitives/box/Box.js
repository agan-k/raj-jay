import { Container } from "./styled";

export default function Box({
  width,
  children, 
  margin, 
  marginLeft,
}) {
  return (
    <Container
      width={width}
      margin={margin} 
      marginLeft={marginLeft}
    >
      {children}
    </Container>
  );
}