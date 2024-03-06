import { RichText } from 'prismic-reactjs';
import {
  Container, 
  BandCampPlayer,
  Cover,
  CoverAndPlayerWrapper,
  Info,
} from './styled';
import {FlexBox} from '../../../../components';
import { BANDCAMP_PLAYER } from '../../../../utils/constants';

interface AlbumProps {
  currentAlbum: any
}

export const Album: React.FC<AlbumProps> = ({currentAlbum}) => {
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
              style={{
                border: 0, 
                height: BANDCAMP_PLAYER.height, 
                width: BANDCAMP_PLAYER.width
              }} 
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