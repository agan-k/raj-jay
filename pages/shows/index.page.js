import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
// import { RichText } from "prismic-reactjs";
import {Layout, 
   MailingList, 
   CalendarListing, 
   FlexBox,
   Text,
   Box,
} from '../../components';
import { 
   Container,
   ListingWrapper,
 } from './styled';

export default function Shows(props) {
   // const selectedPastShows = RichText.render(props.shows.data.shows_body);
   const calendarListings = props.calendar_listings.results.map(listing =>
      <ListingWrapper>
         <CalendarListing listing={listing} />
      </ListingWrapper>
   );

   return (
      <Layout>
         <Container>
            {calendarListings}
         </Container>
      </Layout>
   )
}
export async function getStaticProps() {
   const shows = await client.getSingle("shows");
   const calendar_listings = await client.query(
      Prismic.Predicates.at("document.type", "calendar_listing"),
      {
         orderings: '[my.calendar_listing.date]',
         pageSize: 100
      }
   );
   return {
      props: {
         shows,
         calendar_listings
      }
   };
}
