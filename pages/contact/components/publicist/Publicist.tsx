import {Container} from './styled';
import { Anchor, Box, FlexBox } from '../../../../components';

interface PublicistProps {
  publicist: any
}

export const Publicist: React.FC<PublicistProps> = ({publicist}) => {
  return(
    <Container>
      <Box $width={'64px'} $height={'64px'} $marginBottom={16}>
        <img src={publicist.logo.url} />
      </Box>
      <Anchor path={publicist.link.url}>{publicist.region}:&nbsp;{publicist.name}</Anchor>
    </Container>
  )
}