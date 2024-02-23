import { Anchor, FlexBox, Text } from "../../components";
import { Container } from "./styled";

export default function Footer() {
  return(
    <Container>
      <Anchor url={'https://formversuscontent.com'} target={'_blank'} $color={'grey'}>
        <FlexBox>
          <Text $color={'orange'}>site by:&nbsp;</Text>
          <Text $fontFamily={'monospace'} $fontSize={12} $color={'green'}>{'(form(vs(content)))'}</Text>
        </FlexBox>
          
      </Anchor>
    </Container>
  );
}