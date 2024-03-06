import { MouseEventHandler } from "react";
import Link from "next/link";
import formatPrismicDate from "../../utils/formatPrismicDate";
import { RichText } from "prismic-reactjs";
import { CardContainer, Date, ImageWrapper } from "./styled";
import { FlexBox, LinkArrow, Box } from "..";

export interface CardProps {
  card: any
  onClick?: MouseEventHandler
  id: string
}

export const Card: React.FC<CardProps> = ({
  card, 
  onClick, 
  id,
}) => {
  const isVideoLink = Boolean(card.data.video_link.length > 0);

  return(
    <>
      {!isVideoLink ?
        <CardContainer id={id}>
          <Link href={`/${card.data.content_type.substring(0, 5)}/${card.uid}`}>
            <Date>{formatPrismicDate(card.data.date)}</Date>
            <ImageWrapper>
              <img src={card.data.img.url} />
            </ImageWrapper>
            <Box>
              {RichText.render(card.data.news_card_blurb)}
            </Box>
            <FlexBox $justifyContent={'end'}>
              <LinkArrow />
            </FlexBox>
          </Link> 
        </CardContainer> 
        :
        <CardContainer onClick={onClick} id={id}>
          <Date>{formatPrismicDate(card.data.date)}</Date>
          <ImageWrapper>
            <img src={card.data.img.url} />
          </ImageWrapper>
          <Box>
            {RichText.render(card.data.news_card_blurb)}
          </Box>
          <FlexBox $justifyContent={'end'}>
            <LinkArrow />
          </FlexBox>
        </CardContainer>
      }
    </>
  )
}