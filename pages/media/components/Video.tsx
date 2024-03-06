import { RichText } from "prismic-reactjs";
import HandleMediaLinkModal from "../../../utils/handleMediaLinkModal";
import { VideoContainer } from "../styled";

export default function Video({video, setMedia, setShowModal}) {
  return (
    <VideoContainer 
      onClick={() => HandleMediaLinkModal({
        media: video,
        setShowModal: setShowModal,
        setMedia: setMedia,
    })}
    >
      <img src={video.data.img.url} />
      {RichText.render(video.data.video_caption)}
    </VideoContainer>
  );
}