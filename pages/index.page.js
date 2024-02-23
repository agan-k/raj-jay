import React, { useState } from 'react'
import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";
import {
   Layout,
   MicroBlog,
   NewsCards, 
   Modal,
   Text,
   FlexBox,
   Box,
   CalendarListing,
   Anchor,
   BlockTitle,
   Banner,
} from '../components';
import { currentDate } from '../utils/currentDate';
import { BANNER_QUOTE } from '../utils/constants';
import { Container } from './styled';

export default function Home({content, postsData, calendarListings}) {
   const [showModal, setShowModal] = useState(false);
   const [videoURL, setVideoURL] = useState(null);
   const cards = content.results.filter(item => item.data.news_card); 
   const upcomingShows = calendarListings.filter(listing => listing > currentDate);
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 
   
   return (
      <Layout>
         <Banner $imagePath={'images/banner1.png'} quote={quotes[BANNER_QUOTE.home]}/>
         <Container>
            <section>
               <BlockTitle $margin={'0 0 16px 0'}>news</BlockTitle>
               <NewsCards 
                  cards={cards} 
                  setShowModal={setShowModal}
                  setVideoURL={setVideoURL}
               />
            </section>
            <aside>
               <FlexBox>
                  <Box $padding={'0 0 8px 0'}>
                     <BlockTitle $margin={'0 0 16px 0'}>next show</BlockTitle>
                     <Box>
                        <CalendarListing 
                           listing={upcomingShows[0]}
                        />
                        <FlexBox $justifyContent={'end'}>
                           <Anchor path={'/shows'}>
                              <Text $fontSize={12}>
                                 ...full calendar
                              </Text>
                           </Anchor>
                        </FlexBox>
                     </Box>
                  </Box>
               </FlexBox>

               <FlexBox>
                  <Box>
                     <BlockTitle $margin={'0 0 16px 0'}>blog</BlockTitle>
                     <MicroBlog postsData={postsData} linkToBlog={true} />
                     <FlexBox $justifyContent={'end'}>
                        <Anchor path={'/blog'}>
                        <Text $fontSize={12}>
                           ...blog home
                        </Text>
                        </Anchor>
                     </FlexBox>
                  </Box>
               </FlexBox>
            </aside>
         </Container>
         {showModal && (
            <Modal
               video={videoURL}
               closeModal={() => setShowModal(false)}
            />
         )}
      </Layout>
   )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   );
   const calendarListing = await client.query(
      Prismic.Predicates.at("document.type", "calendar_listing"),
      {
         orderings: '[my.calendar_listing.date desc]',
         pageSize: 1
      }
   );
   const postsData = await client.query(
      Prismic.Predicates.at("document.type", "micro_blog"),
      {
         orderings: '[my.micro_blog.date desc]',
         pageSize : 20
      }
   );
   return {
      props: {
         content,
         postsData: postsData.results,
         calendarListings: calendarListing.results
      },
   }
}