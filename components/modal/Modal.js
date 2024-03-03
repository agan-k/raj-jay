import { Container, Image, ImageWrapper, VideoWrapper } from "./styled";
import { RichText } from "prismic-reactjs";
import isVerticalImage from "../../utils/isVerticalImage";
import BlogHome from "../../pages/blog/index.page";

export default function Modal({media, closeModal}) {
  const isContentVideo = Boolean(media.data.content_type === 'video');
  const isBlogVideo = Boolean(media.data.youtube);
  const isVideo = Boolean(isContentVideo || isBlogVideo);

  return (
    <Container onClick={() => closeModal()}>
      {isVideo ?
        <VideoWrapper>
          <iframe
            width="100%" 
            height="100%" 
            src={isContentVideo ? media.data.video_link[0].text: media.data.youtube.url} 
            title="YouTube video player" 
            frameborder="0" 
            allowfullscreen="true"
          ></iframe>
        </VideoWrapper> :
        <ImageWrapper>
          <Image 
            src={media.data.img.url} 
            vertical={isVerticalImage({
                height: media.data.img.dimensions.height,
                width: media.data.img.dimensions.width,
            })} 
          />
          {RichText.render(media.data.photo_caption)}
        </ImageWrapper>
      } 
    </Container>
  );
}