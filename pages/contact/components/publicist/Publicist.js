import {Container} from './styled';
import { Anchor, Box, FlexBox } from '../../../../components';

export default function Publicist({publicist}) {
  return(
    <Container>
      <Box width={'64px'} height={'64px'} marginBottom={16}>
        <img src={publicist.logo.url} />
      </Box>
      <Anchor path={publicist.link.url}>{publicist.region}:&nbsp;{publicist.name}</Anchor>
    </Container>
  )
}