import { Container, Image, ImageWrapper, VideoWrapper } from "./styled";
import { RichText } from "prismic-reactjs";
import isVerticalImage from "../../utils/isVerticalImage";

export default function Modal(props) {
  let detail;
  if (props.photos) {
    detail = props.photo
  } else if (props.videos) {
    detail = props.video_url
  } else if (props.news_card_video_url) {
    detail = props.news_card_video_url
  } else if (props.blog_video_url) {
    detail = props.blog_video_url
  };
  console.log('detail', detail)
  return (
    <Container onClick={() => props.closeModal()}>
      {props.photos ?
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
      (props.videos || props.news_card_video_url || props.blog_video_url) ?
        <VideoWrapper>
          <iframe 
              width="100%" 
              height="100%" 
              src={detail} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
          ></iframe>
        </VideoWrapper> : ''
      } 
    </Container>
  );
}