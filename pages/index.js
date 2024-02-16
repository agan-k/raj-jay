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
   Anchor
} from '../components';
import { Container } from './styled';

export default function Home({content, postsData, calendarData}) {
   const [showModal, setShowModal] = useState(false);
   const [videoURL, setVideoURL] = useState(null);
   const cards = content.results.filter(item => item.data.news_card);   
   
   return (
      <Layout>
         <Container>
            <section>
               <Text 
                  fontSize={24}
                  fontWeight={100}
                  textAlign={'center'}
                  color={'white'}
                  background={'black'}
                  letterSpacing={5}
                  textTransform={'uppercase'}>
                  News
               </Text>
               <NewsCards 
                  cards={cards} 
                  setShowModal={setShowModal}
                  setVideoURL={setVideoURL}
               />
            </section>
            <aside>
               <FlexBox>
                  <Box width={'100%'}>
                     <Text
                        margin={'0 0 16px 0'}
                        fontSize={24}
                        fontWeight={100}
                        textAlign={'center'}
                        color={'white'}
                        background={'black'}
                        letterSpacing={5}>
                        NEXT SHOW
                     </Text>
                     <Box background={'white'} padding={'16px'}>
                        <CalendarListing 
                           listing={calendarData.results[0]}
                           linkToShows={true} 
                        />
                        <FlexBox justifyContent={'end'}>
                           <Anchor path={'/shows'}>
                           <Text fontSize={16} textTransform={'none'}>
                           ...more, full calendar
                           </Text>
                           </Anchor>
                        </FlexBox>
                     </Box>
                  </Box>
               </FlexBox>

               <FlexBox>
                  <Box background={'white'}>
                     <Text 
                        fontSize={24}
                        fontWeight={100}
                        textAlign={'center'}
                        color={'white'}
                        background={'black'}
                        letterSpacing={5}>
                        microBLOG
                     </Text>
                     <Box padding={'16px'}>
                        <MicroBlog postsData={postsData} linkToBlog={true} />
                        <FlexBox justifyContent={'end'}>
                           <Anchor path={'/blog'}>
                           <Text fontSize={16}>
                              ...more, blog home
                           </Text>
                           </Anchor>
                        </FlexBox>
                     </Box>
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
         orderings: '[my.calendar_listing.date]',
         pageSize: 1
      }
   );
   const postsData = await client.query(
      Prismic.Predicates.at("document.type", "micro_blog"),
      {
         orderings: '[my.micro_blog.date desc]',
         pageSize : 3
      }
   );
   return {
      props: {
         content,
         postsData: postsData.results,
         calendarData: calendarListing
      },
   }
}