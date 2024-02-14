import { RichText } from "prismic-reactjs";
import HandleVideoLinkModal from "../../../utils/handleVideoLinkModal";
import { Container } from "./styled";

export default function Video({video, setShowModal, setVideoURL}) {
  return (
    <Container 
      onClick={() => HandleVideoLinkModal({
        url: video.data.video_link[0].text,
        setShowModal: setShowModal,
        setVideoURL: setVideoURL,
      })}
    >
      <img src={video.data.img.url} />
      {RichText.render(video.data.video_caption)}
    </Container>
  );
}