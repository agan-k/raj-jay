import { Anchor, FlexBox, Text } from "../../components";
import { Container } from "./styled";

export default function Footer() {
  return(
    <>
      <Container>
      </Container>
      <FlexBox $justifyContent={'end'}>
        <Anchor url={'https://formversuscontent.com'} target={'_blank'} $color={'grey'}>
          <FlexBox $gap={'4px'}>
            <Text $fontSize={12} $textTransform={'uppercase'} fontWeight={100}>site by:</Text>
            <Text $fontFamily={'monospace'} $fontSize={12}>{'(form(vs(content)))'}</Text>
          </FlexBox> 
        </Anchor>
      </FlexBox>
    </>
  );
}