import Card from "./Card";
import { Container } from "./styled";
import HandleMediaLinkModal from "../../utils/handleMediaLinkModal";

export default function NewsCards({cards, setShowModal, setMedia}) {
  const newsCards = cards.map((item) => 
    <Card 
      key={item.uid}
      onClick={() => HandleMediaLinkModal({
        media: item,
        setShowModal: setShowModal,
        setMedia: setMedia,
      })}
      id={item.id}
      card={item}
    />
  ); 
  
  return(
    <Container>
      {newsCards}
    </Container>

  );
}