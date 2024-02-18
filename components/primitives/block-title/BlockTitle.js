import { Container } from "./styled";

export default function BlockTitle({children, margin}) {
  return <Container margin={margin}>{children}</Container>;
}