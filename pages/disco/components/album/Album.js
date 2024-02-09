import { RichText } from 'prismic-reactjs';
import {
  Wrapper, 
  Container, 
  Info,
  BandCampPlayer,
  Cover,
} from './styled';

const PLAYER_WIDTH = 300;

export default function Album({currentAlbum}) {
  
  return(
    <div>
      <Container>
        <BandCampPlayer>
          <Cover src={currentAlbum.img.url} width={PLAYER_WIDTH}/>
          { RichText.asText(currentAlbum.bandcamp_id) ?
            <iframe 
              style={{border: 0, height: '500px', width: `${PLAYER_WIDTH}px`}} 
              src={`https://bandcamp.com/EmbeddedPlayer/album=${RichText.asText(currentAlbum.bandcamp_id)}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/`} 
              seamless 
            /> : ''
          }
        </BandCampPlayer>
        <Info>
          {RichText.render(currentAlbum.content_body)}
        </Info>
      </Container>

    </div>
  );
}