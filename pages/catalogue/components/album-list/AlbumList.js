import Link from 'next/link';
import {Container} from './styled';
import {AlbumThumb} from '..';

export default function AlbumList({catalogue}) {
  const albums = catalogue.map((album, index) => 
    <AlbumThumb key={album.uid} album={album} id={album.id}/>
  )
  return(
    <Container>
      {albums}
    </Container>
  );
}