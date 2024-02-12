import { Container, Image, ImageWrapper, VideoWrapper } from "./styled";
import { RichText } from "prismic-reactjs";
import isVerticalImage from "../../utils/isVerticalImage";

export default function Modal({video, closeModal}) {
  const hasVideo = Boolean(video != null)

  return (
    <Container onClick={() => closeModal()}>
      {!hasVideo ?
        <ImageWrapper>
          <Image 
            src={detail.img.url} 
            vertical={isVerticalImage({
                height: detail.img.dimensions.height,
                width: detail.img.dimensions.width,
            })} 
          />
          {RichText.render(detail.photo_caption)}
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