import Link from "next/link";
import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../utils/formatPrismicDate";
import {Text, FlexBox, Box} from '../../components'
import { 
  Listing, 
  Header,
  Body, 
  Footer,
  Icon,
} from "./styled";

export default function CalendarListing({listing}) {
  return(
    <Listing>
      <Header>
        {formatPrismicDate(listing.data.date)}
        <Text fontSize={24} margin={'8px 0'} textTransform={'capitalize'}>
          {RichText.asText(listing.data.headlining_artist)}
        </Text>
        <Text fontWeight={'100'}>
          {RichText.asText(listing.data.venue)}
        </Text>
      </Header>
      <Body>
        <ul>
          {listing.data.lineup.map(list_item =>
            <li key={list_item.text}>{list_item.text}</li>
          )}
        </ul>
      </Body>
      <Footer>
        {RichText.asText(listing.data.street_address)}
        <Box margin={'16px 0'}>
          {listing.data.map_link.url && (
            <Link href={listing.data.map_link.url} target="_blank">
            <Icon src="/icons/location-icon.png" />&nbsp;Directions</Link>
          )}
        </Box>
        <Box marginBottom={16}>
          <FlexBox>
            {RichText.asText(listing.data.city)}{','}&nbsp;
            {RichText.asText(listing.data.country)}
          </FlexBox>
        </Box>
        {
          listing.data.links.map(item => (
            item.link.url &&
            <Link href={item.link.url} target="_blank">
              <FlexBox>
                <Icon src="/icons/link-icon.png" />&nbsp;
                <Text fontSize={12} textTransform={'lowercase'} fontStyle={'italic'}>
                  {item.link.url.substring(0, 30)}{'...'}
                </Text>
              </FlexBox>
            </Link>
          ))
        }
      </Footer>
    </Listing>
  )
}