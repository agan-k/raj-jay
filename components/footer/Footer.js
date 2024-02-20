import { Anchor } from "../../components";
import { Container } from "./styled";

export default function Footer() {
  return(
    <Container>
      <Anchor url={'https://formversuscontent.com'} target={'_blank'} color={'white'}>Site by FormVsContent</Anchor>
    </Container>
  );
}