import { Container, Image, ImageWrapper, VideoWrapper } from "./styled";
import { RichText } from "prismic-reactjs";
import isVerticalImage from "../../utils/isVerticalImage";

export default function Modal({video, closeModal, photo}) {
  const hasVideo = Boolean(video != null)

  return (
    <Container onClick={() => closeModal()}>
      {!hasVideo ?
        <ImageWrapper>
          <Image 
            src={photo.img.url} 
            vertical={isVerticalImage({
                height: photo.img.dimensions.height,
                width: photo.img.dimensions.width,
            })} 
          />
          {RichText.render(photo.photo_caption)}
        </ImageWrapper> :
        <VideoWrapper>
          <iframe
            width="100%" 
            height="100%" 
            src={video} 
            title="YouTube video player" 
            frameborder="0" 
            allowfullscreen
          ></iframe>
        </VideoWrapper>
      } 
    </Container>
  );
}