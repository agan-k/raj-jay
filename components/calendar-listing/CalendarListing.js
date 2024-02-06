import Link from "next/link";
import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../utils/formatPrismicDate";
import { 
  Listing, 
  Header,
  Body, 
  Footer,
  Links,
} from "./styled";

export default function CalendarListing({listing}) {
  console.log('here: ', listing.data.links)
  return(
    <Listing>
      <Header>
        <h2>
          {formatPrismicDate(listing.data.date)}
        </h2>
        <h2>
          {RichText.asText(listing.data.headlining_artist)}
        </h2>
        <h3>
          {RichText.asText(listing.data.venue)}
          &nbsp;
          {listing.data.map_link.url && (
            <a href={listing.data.map_link.url} target="_blank">
            <img src="/icons/location-icon.png" /></a>
          )}
        </h3>
      </Header>
      <Body>
        <ul>
          {listing.data.lineup.map(list_item =>
            <li key={list_item.text}>{list_item.text}</li>
          )}
        </ul>
      </Body>
      <Footer>
        <p>
          {RichText.asText(listing.data.street_address)}
        </p>
        <h4>
          {RichText.asText(listing.data.city)}
          {listing.data.country && ', '}
          {RichText.asText(listing.data.country)}
        </h4>
        <Links>
          {listing.data.links.length !== 0 && (
            <>
              <img src="/icons/link-icon.png" />
              {RichText.render(listing.data.links)}
            </>
          )}
        </Links>
      </Footer>
    </Listing>
  )
}