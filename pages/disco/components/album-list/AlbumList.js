import Link from 'next/link';
import {Container} from './styled';
import {AlbumThumb} from '../../components';

export default function AlbumList({discography}) {
  const albums = discography.map((album, index) => 
    <AlbumThumb key={album.uid} album={album} index={index} />
  )
  return(
    <Container>
      {albums}
    </Container>
  );
}