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
  function getHref() {
    const path = card.data.content_type;
    switch(path) {
      case 'discography':
        return `/albums/${card.uid}`;
        case 'press-reviews':
        case 'press-interviews':
        case 'press-features':
        case 'press-releases':
        return `/press/${card.uid}`;
    }
    return path
  }
  const path = getHref();

  return(
    <>
      {!isVideoLink ?
        <CardContainer id={id}>
          <Link href={path}>
            <Date>
              {
                card.data.date === null ? 
                card.last_publication_date :
                formatPrismicDate(card.data.date)
              }
            </Date>
            <ImageWrapper>
              <img src={card.data.img.url} />
            </ImageWrapper>
            <Box>
              {RichText.render(card.data.news_card_blurb)}
              <FlexBox $justifyContent={'end'}>
                <LinkArrow />
              </FlexBox>
            </Box>
          </Link> 
        </CardContainer> 
        :
        <CardContainer onClick={onClick} id={id}>
          <Date>
              {
                card.data.date === null ? 
                formatPrismicDate(card.last_publication_date) :
                formatPrismicDate(card.data.date)
              }
            </Date>
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