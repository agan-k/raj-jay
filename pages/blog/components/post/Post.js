import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../../../utils/formatPrismicDate";
import HandleVideoLinkModal from "../../../../utils/handleVideoLinkModal";
import {Container, Date, TitleImage} from "./styled";

export default function Post({data, setShowModal, setVideoURL}) {
  console.log(data)
  const hasVideoLink = Boolean(data.video_link.length != 0);
  const videoLink = hasVideoLink ? data.video_link[0].text : '';
  return (
  <Container>
    <Date>{formatPrismicDate(data.date)}</Date>
    {hasVideoLink ? 
      <TitleImage 
        src={data.img.url}
        onClick={() => HandleVideoLinkModal({
          url: videoLink,
          setShowModal: setShowModal,
          setVideoURL: setVideoURL,
        })}
        pointer={hasVideoLink} 
      /> : <TitleImage src={data.img.url} pointer={hasVideoLink} /> 
    }
    {RichText.render(data.content_body)}
  </Container>
  );
}