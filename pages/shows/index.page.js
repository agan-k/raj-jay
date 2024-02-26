import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
import {
   Layout, 
   CalendarListing,
   Box,
   FlexBox,
   Block,
   BlockTitle,
   Banner,
} from '../../components';
import { BANNER_QUOTE } from "../../utils/constants";
import { currentDate } from "../../utils/currentDate";

export default function Shows({calendarListings, content}) {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0);

   const upcomingShows = calendarListings.map(listing => {
      if (listing.data.date > currentDate) {
         return (
            <CalendarListing key={listing.id} listing={listing} $width={'32%'}/>
         );
      }
   });
   
   const pastShows = calendarListings.map(listing => {
      if (listing.data.date < currentDate) {
         return(
            <CalendarListing key={listing.id} listing={listing} $width={'32%'}/>
         );
      }
   });

   return (
      <Layout>
         <Banner $imagePath={'images/banner2.png'} quote={quotes[BANNER_QUOTE.shows]}/>
         <Block $marginBottom={14}>
            <BlockTitle $margin={'0 0 16px 0'}>upcoming shows</BlockTitle>
            <FlexBox>
               {upcomingShows}
            </FlexBox>
         </Block>
         <Block>
            <BlockTitle $margin={'0 0 16px 0'}>past shows</BlockTitle>
            <FlexBox>
               {pastShows}
            </FlexBox>
         </Block>
      </Layout>
   );
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   );
   const calendarListings = await client.query(
      Prismic.Predicates.at("document.type", "calendar_listing"),
      {
         orderings: '[my.calendar_listing.date desc]',
         pageSize: 100
      }
   );
   return {
      props: {
         content,
         calendarListings: calendarListings.results
      }
   };
}
