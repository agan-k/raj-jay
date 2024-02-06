import { Container } from "./styled";

export default function FlexBox({children, justifyContent}) {
  return (
    <Container justifyContent={justifyContent}>
      {children}
    </Container>
  );
}