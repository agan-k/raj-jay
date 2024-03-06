import { Anchor, FlexBox, Text, Box } from "..";

export const Footer: React.FC = () => {
  return(
    <FlexBox $justifyContent={'end'}>
      <Box $marginBottom={14} $marginTop={14}>
        <Anchor url={'https://formversuscontent.com'} target={'_blank'} $color={'grey'}>
            <FlexBox $gap={'4px'}>
              <Text 
                $fontSize={12} 
                $textTransform={'uppercase'} 
                $fontWeight={100}>
                  site by:
              </Text>
              <Text 
                $fontFamily="monospace" 
                $fontSize={12} 
                $color="orange"
              >
                {'(form(vs(content)))'}
              </Text>
            </FlexBox> 
        </Anchor>
      </Box>
    </FlexBox>
  );
}