import Link from "next/link";
import formatPrismicDate from "../../utils/formatPrismicDate";
import { RichText } from "prismic-reactjs";
import { CardContainer, Date, Blurb, Arrow } from "./styled";
import { FlexBox } from "../primitives";

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
            <FlexBox justifyContent={'end'}>
              <Arrow>&rarr;</Arrow>
            </FlexBox>
          </Link> 
        </CardContainer> 
        :
        <CardContainer>
          <Date>{formatPrismicDate(card.data.date)}</Date>
          <img src={card.data.img.url} />
          <Blurb>
            {RichText.render(card.data.news_card_blurb)}
          </Blurb>
          <FlexBox justifyContent={'end'}>
            <Arrow>&rarr;</Arrow>
          </FlexBox>
        </CardContainer>
      }
    </>
  )
}