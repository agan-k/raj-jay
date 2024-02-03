import { useState } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../utils/formatPrismicDate";
import { Container, Card, Date, Arrow, Blurb } from "./styled";

export default function NewsCards({cards}) {
  const [videoURL, setVideoURL] = useState(null)
  console.log('NewsCards: ', cards)
  const newsCards = cards.map((item) => {
    if (item.data.video_link.length > 0) {
      return(
        <Card key={item.uid}
          onClick={() => setVideoURL(item.data.video_link[0].text)}
        >
          <Date>{formatPrismicDate(item.data.date)}</Date>
          <img src={item.data.img.url} onClick={() => setShowModal(true)}/>
          <Blurb>
            {RichText.render(item.data.news_card_blurb)}
          </Blurb>
          <Arrow>&rarr;</Arrow>
        </Card>
      );
    }
    return(
      <Card key={item.uid}>
        <Link href={`/${item.data.content_type.substr(0, 5)}/${item.uid}`} >
          <Date>{formatPrismicDate(item.data.date)}</Date>
          <img src={item.data.img.url}/>
          <Blurb>
            {RichText.render(item.data.news_card_blurb)}
          </Blurb>
          <Arrow>&rarr;</Arrow>
        </Link>
      </Card>
    );
  }); 
  
  return(
    <Container>
      {newsCards}
    </Container>
  );
}