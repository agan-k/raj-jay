import { Dispatch, SetStateAction } from "react";
import {Card} from "./Card";
import { Container } from "./styled";
import HandleMediaLinkModal from "../../utils/handleMediaLinkModal";

export interface NewsCardsProps {
  cards: any
  setShowModal?: Dispatch<SetStateAction<boolean>>
  setMedia?: Dispatch<SetStateAction<boolean>>
}

export const NewsCards: React.FC <NewsCardsProps> = ({
  cards, 
  setShowModal, 
  setMedia
})  => {
  const newsCards = cards.map((item) => 
    <Card 
      key={item.id}
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