import {Container} from './styled';
import {AlbumThumb} from '../../components';

interface AlbumListProps {
  albums: any
}

export const AlbumList: React.FC<AlbumListProps> = ({albums}) => {
  const albumsList = albums.map(album => 
    <AlbumThumb key={album.uid} album={album} id={album.id}/>
  )
  return(
    <Container>
      {albumsList}
    </Container>
  );
}