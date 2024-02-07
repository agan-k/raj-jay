import { Container } from "./styled";

export default function Box({children, marginLeft}) {
  return (
    <Container marginLeft={marginLeft}>
      {children}
    </Container>
  );
}