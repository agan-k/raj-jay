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
import { currentDate } from "../../utils/currentDate";
import { 
   ListingWrapper,
 } from './styled';

export default function Shows({calendarListings}) {
   const upcomingShows = calendarListings.map(listing => {
      if (listing.data.date > currentDate) {
         return (
            <ListingWrapper>
               <CalendarListing listing={listing} />
            </ListingWrapper>
         );
      }
   });
   const oldDates = calendarListings.map(listing => listing);

   const pastShows = oldDates.map(listing => {
      if (listing.data.date < currentDate) {
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
            <BlockTitle margin={'0 0 16px 0'}>upcoming shows</BlockTitle>
            <FlexBox>
               {upcomingShows}
            </FlexBox>
            <BlockTitle margin={'32px 0 16px 0'}>past shows</BlockTitle>
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
         orderings: '[my.calendar_listing.date desc]',
         pageSize: 100
      }
   );
   return {
      props: {
         calendarListings: calendarListings.results
      }
   };
}
