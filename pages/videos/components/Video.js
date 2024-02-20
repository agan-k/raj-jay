import { RichText } from "prismic-reactjs";
import HandleMediaLinkModal from "../../../utils/handleMediaLinkModal";
import { VideoContainer } from "../styled";

export default function Video({video, setShowModal, setVideoURL}) {
  return (
    <VideoContainer 
      onClick={() => HandleMediaLinkModal({
        url: video.data.video_link[0].text,
        setShowModal: setShowModal,
        setMediaURL: setVideoURL,
      })}
    >
      <img src={video.data.img.url} />
      {RichText.render(video.data.video_caption)}
    </VideoContainer>
  );
}