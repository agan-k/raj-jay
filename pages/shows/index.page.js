import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
// import { RichText } from "prismic-reactjs";
import {
   Layout, 
   CalendarListing,
   Box,
   FlexBox,
   BlockTitle,
} from '../../components';
import { 
   ListingWrapper,
 } from './styled';

export default function Shows({calendarListings}) {
   const currentDate = new Date();
   const upcomingShows = calendarListings.map(listing => {
      if (listing.data.date > currentDate.toISOString()) {
         return (
            <ListingWrapper>
               <CalendarListing listing={listing} />
            </ListingWrapper>
         );
      }
   });
   const oldDates = calendarListings.map(listing => listing);

   const pastShows = oldDates.reverse().map(listing => {
      if (listing.data.date < currentDate.toISOString()) {
         return(
            <ListingWrapper>
               <CalendarListing listing={listing} />
            </ListingWrapper>
         );
      }
   });


   return (
      <Layout>
         <Box>
            <BlockTitle margin={'0 0 8px 0'}>upcoming shows</BlockTitle>
            <FlexBox>
               {upcomingShows}
            </FlexBox>
            <BlockTitle margin={'32px 0 8px 0'}>past shows</BlockTitle>
            <FlexBox>
               {pastShows}
            </FlexBox>
         </Box>
      </Layout>
   )
}
export async function getStaticProps() {
   const calendarListings = await client.query(
      Prismic.Predicates.at("document.type", "calendar_listing"),
      {
         orderings: '[my.calendar_listing.date]',
         pageSize: 100
      }
   );
   return {
      props: {
         calendarListings: calendarListings.results
      }
   };
}
