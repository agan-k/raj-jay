import Link from "next/link";
import formatPrismicDate from "../../utils/formatPrismicDate";
import { RichText } from "prismic-reactjs";
import { CardContainer, Date, Blurb, Arrow } from "./styled";

export default function Card({card}) {
  const isVideoLink = Boolean(card.data.video_link.length > 0);
  return (
    <>
      {!isVideoLink ? 
        <CardContainer>
          <Link href={`/${card.data.content_type.substring(0, 5)}/${card.uid}`}>
            <Date>{formatPrismicDate(card.data.date)}</Date>
            <img src={card.data.img.url} />
            <Blurb>
            {RichText.render(card.data.news_card_blurb)}
            </Blurb>
            <Arrow>&rarr;</Arrow>
          </Link> 
        </CardContainer> 
        :
        <CardContainer>
          <Date>{formatPrismicDate(card.data.date)}</Date>
          <img src={card.data.img.url} />
          <Blurb>
            {RichText.render(card.data.news_card_blurb)}
          </Blurb>
          <Arrow>&rarr;</Arrow>
        </CardContainer>
      }
    </>
  )
}