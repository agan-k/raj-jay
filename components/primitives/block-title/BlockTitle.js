import { Text } from "../../../components";
import { Container } from "./styled";

export default function BlockTitle({children, margin, textAlign}) {
  return (
    <Container margin={margin} textAlign={textAlign}>
      {children}
    </Container>
  );
}