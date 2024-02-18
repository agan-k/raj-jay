import { useState } from "react";
import Card from "./Card";
import { Container, Date, Arrow, Blurb } from "./styled";
import HandleVideoLinkModal from "../../utils/handleVideoLinkModal";

export default function NewsCards({cards, setShowModal, setVideoURL}) {
  const newsCards = cards.map((item) => 
    <Card key={item.uid}
      onClick={() => HandleVideoLinkModal({
        url: item.data.video_link[0].text,
        setShowModal: setShowModal,
        setVideoURL: setVideoURL,
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