import Prismic from "prismic-javascript";
import { GetStaticProps } from "next";
import { client } from "../../prismic-configuration";
import {
   Layout, 
   CalendarListing,
   FlexBox,
   Block,
   BlockTitle,
   Banner,
} from '../../components';
import { BANNER_QUOTE } from "../../utils/constants";
import { currentDate } from "../../utils/currentDate";

interface ShowsProps {
   calendarListings: any
   content: any
}

export const Shows: React.FC<ShowsProps> = ({calendarListings, content}) => {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0);

   const upcomingShowsArr = calendarListings.reverse().filter(listing => {
      if (listing.data.date > currentDate) return listing;
   });
   const upcomingShows = upcomingShowsArr.map(listing => {
      if (listing.data.date > currentDate) {
         return (
            <CalendarListing key={listing.id} listing={listing} $width={'32%'}  />
         );
      }
   });
   console.log(upcomingShowsArr)
   
   const pastShows = calendarListings.reverse().map(listing => {
      if (listing.data.date < currentDate) {
         return(
            <CalendarListing key={listing.id} listing={listing} $width={'32%'} $pastShow={true} />
         );
      }
   });
   return (
      <Layout>
         <Banner $imagePath={'images/banner2.png'} quote={quotes[BANNER_QUOTE.shows]}/>
            {
               upcomingShows.length > 0 && (
                  <Block $marginBottom={14}>
                     <BlockTitle $margin={'0 0 16px 0'}>upcoming shows</BlockTitle>
                     <FlexBox $gap="2%">
                        {upcomingShows}
                     </FlexBox>
                  </Block>
               )
            }
         <Block>
            <BlockTitle $margin={'0 0 16px 0'}>past shows</BlockTitle>
            <FlexBox $gap="2%">
               {pastShows}
            </FlexBox>
         </Block>
      </Layout>
   );
};
export default Shows;

export const getStaticProps = (async () => {
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
}) satisfies GetStaticProps;
