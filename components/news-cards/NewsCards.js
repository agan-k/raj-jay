import { useState } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../utils/formatPrismicDate";
import { Text } from "../../components";
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