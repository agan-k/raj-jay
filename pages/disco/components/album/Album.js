import { RichText } from 'prismic-reactjs';
import {
  Container, 
  BandCampPlayer,
  Cover,
  CoverAndPlayerWrapper,
  Info,
} from './styled';
import { Box, FlexBox, Text } from '../../../../components';

const PLAYER_WIDTH = 300;

export default function Album({currentAlbum}) {
  return(
    <Container>
      <CoverAndPlayerWrapper>
        <FlexBox $justifyContent={'center'}>
          <Cover>
            <img src={currentAlbum.img.url} />
          </Cover>
        </FlexBox>
        <BandCampPlayer>
          { RichText.asText(currentAlbum.bandcamp_id) ?
            <iframe 
              style={{border: 0, height: '300px', width: `100%`}} 
              src={`https://bandcamp.com/EmbeddedPlayer/album=${RichText.asText(currentAlbum.bandcamp_id)}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/`} 
              seamless 
            /> : ''
          }
        </BandCampPlayer>
      </CoverAndPlayerWrapper>
      <Info>
        {RichText.render(currentAlbum.content_body)}
      </Info>
    </Container>
  );
}