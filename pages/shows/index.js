import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
// import { RichText } from "prismic-reactjs";
import {Layout, 
   MailingList, 
   CalendarListing, 
   FlexBox,
   Text,
} from '../../components';
import { 
   Container,
    CalendarContainer,
   //  SelectedPastShows,
   FeaturedFlyers,
 } from './styled';

export default function Shows(props) {
   // const selectedPastShows = RichText.render(props.shows.data.shows_body);
   const calendarListings = props.calendar_listings.results.map(listing =>
      <CalendarListing listing={listing} />
   );

   return (
      <Layout>
         <Container>
            <FlexBox justifyContent={'end'} width={'100%'}  >
               <FlexBox alignItems={'center'}>
                  <Text fontWeight={100} fontStyle={'italic'}>mailing list: </Text>&nbsp;&nbsp;
               </FlexBox>
               <MailingList />
            </FlexBox>
            <CalendarContainer>
               <section>
                  {calendarListings}
                  {/* TODO: ask if there is a need for this section */}
                  {/* <SelectedPastShows>
                     {selectedPastShows}
                  </SelectedPastShows> */}
               </section>
               <FeaturedFlyers>
                  <img src={props.shows.data.featured_flyer.url} />
                  <img src={props.shows.data.featured_flyer1.url} />
                  <img src={props.shows.data.featured_flyer2.url} />
               </FeaturedFlyers>
            </CalendarContainer>
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
