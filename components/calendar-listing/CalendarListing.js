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

export default function CalendarListing({listing, $width}) {
  return(
    <Listing $width={$width}>
      <Header>
        <Text $fontWeight={100} $textTransform={'uppercase'}>
          {formatPrismicDate(listing.data.date)}
        </Text>
        <Text $fontSize={24} $margin={'8px 0'} $textTransform={'capitalize'}>
          {RichText.asText(listing.data.headlining_artist)}
        </Text>
        <Text $fontSize={20} $fontWeight={'100'}>
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
        <Text $fontSize={12} $fontWeight={100}>
          {RichText.asText(listing.data.street_address)}
        </Text>
        <Box $margin={'8px 0'}>
          {listing.data.map_link.url && (
            <Link href={listing.data.map_link.url} target="_blank">
              <FlexBox>
                <Icon src="/icons/location-icon.png" />&nbsp;
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
            <Link href={item.link.url} target="_blank">
              <FlexBox>
                <Text 
                // $fontSize={12} 
                $textTransform={'lowercase'} 
                $fontStyle={'italic'}
                $fontWeight={100}
                >
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