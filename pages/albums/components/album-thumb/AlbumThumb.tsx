import { useEffect, useState } from 'react';
import Link from 'next/link';
import {Container, Image, ImageWrapper} from './styled';
import { useRouter } from 'next/router';
import { FEATURED_ALBUM } from '../../../../utils/constants';

interface AlbumThumbProps {
  album: any
  id: string
}


export const AlbumThumb: React.FC<AlbumThumbProps> = ({
  album, 
  id
}) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const isAlbumsHome = 
    Boolean(
      router.asPath === '/albums' &&
      album.data.content_body[1].text === FEATURED_ALBUM
  );
  const currentAlbum = router.query.uid;
  useEffect(() => {
    if (isAlbumsHome || album.uid === currentAlbum) setIsActive(true);
    return () => {
      setIsActive(false);
    }
  }, [currentAlbum])
  return(
    <Container $active={isActive} id={id}>
      <ImageWrapper $active={isActive}>
        <Link href="/albums/[id]" as={`/albums/${album.uid}`}>
          <Image src={album.data.img.url} $active={isActive} />
        </Link>
      </ImageWrapper>
    </Container>
  );
}