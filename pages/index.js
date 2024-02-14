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
} from '../components';
import { Container } from './styled';

export default function Home({content, postsData}) {
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
               <FlexBox justifyContent={'end'} >
                  <Box>
                     <Text 
                        fontSize={24}
                        fontWeight={100}
                        textAlign={'center'}
                        color={'white'}
                        background={'black'}
                        letterSpacing={5}>
                        microBLOG
                     </Text>
                     <MicroBlog postsData={postsData} linkToBlog={true} />
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
         postsData: postsData.results
      },
   }
}