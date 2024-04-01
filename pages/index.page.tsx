import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";
import {
   Layout,
   MicroBlog,
   NewsCards, 
   Modal,
   Text,
   FlexBox,
   CalendarListing,
   Anchor,
   BlockTitle,
   Banner,
   Cta,
   Block,
} from '../components';
import { currentDate } from '../utils/currentDate';
import { BANNER_QUOTE } from '../utils/constants';
import { Container } from './styled';

interface HomeProps {
   content: any
   postsData: any
   calendarListings: any
}

export const Home: React.FC<HomeProps> = ({
   content,
   postsData,
   calendarListings
}) => {
   const [showModal, setShowModal] = useState(false);
   const [media, setMedia] = useState(null);
   const [mounted, setMounted] = useState(false);
   // useEffect(() => setMounted(true), []); if (!mounted) return null;
   const cards = content.results.filter(item => item.data.news_card); 
   const upcomingShows = calendarListings.filter(listing => listing.data.date > currentDate);
   const nextShow = upcomingShows[upcomingShows.length -1];
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 
   
   return (
      <Layout>
         <Banner $imagePath={'images/banner1.png'} quote={quotes[BANNER_QUOTE.home]}/>
         <Container>
            <aside>
               <Block>
                  <BlockTitle $margin={'0 0 16px 0'}>new album</BlockTitle>
                     <Cta 
                        action={'buy / listen'} 
                        imagePath={'/images/pistils.jpg'}
                        url={'https://pistils.bandcamp.com/merch'}
                     />
                     <FlexBox $justifyContent={'end'}>
                        <Anchor path={'/albums'}>
                           <Text $fontSize={12}>
                              ...all albums
                           </Text>
                        </Anchor>
                     </FlexBox>
               </Block>
               <Block>
                  <BlockTitle $margin={'0 0 16px 0'}>next show</BlockTitle>
                  <CalendarListing 
                     listing={nextShow}
                     $nextShow={true}
                  />
                  <FlexBox $justifyContent={'end'}>
                     <Anchor path={'/shows'}>
                        <Text $fontSize={12}>
                           ...full calendar
                        </Text>
                     </Anchor>
                  </FlexBox>
               </Block>
               <Block>
                  <BlockTitle $margin={'0 0 16px 0'}>blog</BlockTitle>
                  <MicroBlog postsData={postsData} />
                  <FlexBox $justifyContent={'end'}>
                     <Anchor path={'/blog'}>
                     <Text $fontSize={12}>
                        ...blog home
                     </Text>
                     </Anchor>
                  </FlexBox>
               </Block>
            </aside>
            <section id={'news'}>
               <Block>
                  <BlockTitle $margin={'0 0 16px 0'}>news</BlockTitle>
                  <NewsCards 
                     cards={cards} 
                     setShowModal={setShowModal}
                     setMedia={setMedia}
                  />
               </Block>
            </section>
         </Container>
         {showModal && (
            <Modal
               media={media}
               closeModal={() => setShowModal(false)}
            />
         )}
      </Layout>
   )
};
export default Home;

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
   const postsData = await client.query(
      Prismic.Predicates.at("document.type", "micro_blog"),
      {
         orderings: '[my.micro_blog.date desc]',
         pageSize : 1
      }
   );
   return {
      props: {
         content,
         postsData: postsData.results,
         calendarListings: calendarListings.results
      },
   }
}) satisfies GetStaticProps
