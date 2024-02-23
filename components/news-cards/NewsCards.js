import Card from "./Card";
import { Container } from "./styled";
import HandleMediaLinkModal from "../../utils/handleMediaLinkModal";

export default function NewsCards({cards, setShowModal, setVideoURL}) {
  const newsCards = cards.map((item) => 
    <Card key={item.uid}
      onClick={() => HandleMediaLinkModal({
        url: item.data.video_link[0].text,
        setShowModal: setShowModal,
        setMediaURL: setVideoURL,
      })}
      card={item}
    />
  ); 
  
  return(
    <Container>
      {newsCards}
    </Container>

  );
}