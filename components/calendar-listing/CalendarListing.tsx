import Link from "next/link";
import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../utils/formatPrismicDate";
import {Text, FlexBox, Box, Anchor} from '../../components';
import { 
  Listing, 
  Header,
  Body, 
  Footer,
  Icon,
} from "./styled";

export interface CalendarListingProps {
  listing?: any
  $width?: string
  $nextShow?: boolean
  $pastShow?: boolean
}

export const CalendarListing: React.FC<CalendarListingProps> = ({listing, $width, $nextShow, $pastShow}) => {
  return(
    <Listing $width={$width} $nextShow={$nextShow} $pastShow={$pastShow}>
      <Header>
        <Text $fontWeight={100} $textTransform={'uppercase'}>
          {formatPrismicDate(listing.data.date)}
        </Text>
        <Text $fontSize={24} $margin={'8px 0'} $textTransform={'capitalize'}>
          {RichText.asText(listing.data.headlining_artist)}
        </Text>
        <Text $fontSize={20} $fontWeight={100}>
          {RichText.asText(listing.data.venue)}
        </Text>
      </Header>
      {!$nextShow && (
        <Body>
          <ul>
            {listing.data.lineup.map((list_item, index) =>
              <li key={list_item.text+index}>{list_item.text}</li>
            )}
          </ul>
        </Body>
      )}
      <Footer $pastShow={$pastShow}>
        <Text $fontSize={12} $fontWeight={100}>
          {RichText.asText(listing.data.street_address)}
        </Text>
        <Box $margin={'8px 0'}>
          {listing.data.map_link.url && (
            <Link href={listing.data.map_link.url} target="_blank">
              <FlexBox>
                <Icon src="/icons/location-icon.png" $pastShow={$pastShow} />&nbsp;
                <Text $fontSize={12} $fontWeight={100}>Directions</Text>
              </FlexBox>
            </Link>
          )}
        </Box>
        <Box $marginBottom={16}>
          <FlexBox>
            <Text $fontSize={20}>
              {RichText.asText(listing.data.city)}{','}&nbsp;
              {RichText.asText(listing.data.country)}
            </Text>
          </FlexBox>
        </Box>
        {
          listing.data.links.map(item => (
            item.link.url &&
            <Anchor key={item.link.url} path={item.link.url}>
              {item.link.url.split('.')[1]}
            </Anchor>
          ))
        }
      </Footer>
    </Listing>
  )
};