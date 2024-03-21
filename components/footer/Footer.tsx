import { Anchor, FlexBox, Text, Box } from "../../components";
import { Container, Flipper, FlipperWrapper } from './styled';

export const Footer: React.FC = () => {
  return(
    <Container>
      <FlipperWrapper>
        <Flipper>
          <Anchor url={'https://formversuscontent.com'} target={'_blank'} $color={'black'}>
            <Text 
              $fontFamily="courier" 
              $fontSize={14} 
              $color="brown"
            >
              {'site by: '}{'(form (vs (content)))'}
            </Text>
          </Anchor>
        </Flipper>
      </FlipperWrapper>
    </Container>
  );
}