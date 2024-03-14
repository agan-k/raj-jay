import { Anchor, FlexBox, Text, Box } from "../../components";
import { Container, Flipper, FlipperWrapper } from './styled';

export const Footer: React.FC = () => {
  return(
    <Container>
      <FlipperWrapper>
        <Flipper>
          <Anchor url={'https://formversuscontent.com'} target={'_blank'} $color={'orange'}>
            <Text 
              $fontFamily="courier new" 
              $fontSize={14} 
              $color="grey"
            >
              {'(form (vs (content)))'}
            </Text>
          </Anchor>
        </Flipper>
      </FlipperWrapper>
    </Container>
  );
}