import Link from "next/link";
import formatPrismicDate from "../../utils/formatPrismicDate";
import { RichText } from "prismic-reactjs";
import { CardContainer, Date, Blurb, ImageWrapper } from "./styled";
import { FlexBox, LinkArrow } from "../../components";

export default function Card({card, onClick}) {
  const isVideoLink = Boolean(card.data.video_link.length > 0);

  return(
    <>
      {!isVideoLink ? 
        <CardContainer>
          <Link href={`/${card.data.content_type.substring(0, 5)}/${card.uid}`}>
            <Date>{formatPrismicDate(card.data.date)}</Date>
            <ImageWrapper>
              <img src={card.data.img.url} />
            </ImageWrapper>
            <Blurb>
            {RichText.render(card.data.news_card_blurb)}
            </Blurb>
            <FlexBox $justifyContent={'end'}>
              <LinkArrow />
            </FlexBox>
          </Link> 
        </CardContainer> 
        :
        <CardContainer onClick={onClick}>
          <Date>{formatPrismicDate(card.data.date)}</Date>
          <ImageWrapper>
            <img src={card.data.img.url} />
          </ImageWrapper>
          <Blurb>
            {RichText.render(card.data.news_card_blurb)}
          </Blurb>
          <FlexBox $justifyContent={'end'}>
            <LinkArrow />
          </FlexBox>
        </CardContainer>
      }
    </>
  )
}