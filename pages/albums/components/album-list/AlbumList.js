import Link from 'next/link';
import {Container} from './styled';
import {AlbumThumb} from '..';

export default function AlbumList({albums}) {
  const albumsList = albums.map((album, index) => 
    <AlbumThumb key={album.uid} album={album} id={album.id}/>
  )
  return(
    <Container>
      {albumsList}
    </Container>
  );
}