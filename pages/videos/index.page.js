import React, { useState } from 'react'

import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';

import {Layout, Modal, Banner} from '../../components';
import { BANNER_QUOTE } from '../../utils/constants';
import Video from './components/Video';
import {Container, Gallery} from './styled'

export default function Videos({content}) {
   const [showModal, setShowModal] = useState(false);
   const [videoURL, setVideoURL] = useState(null);

   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 

   const videosData = content.results.filter(result =>
      result.data.content_type == 'video'
   );

   const videos = videosData.map((video) => 
      <Video 
         key={video.uid} 
         video={video}
         setShowModal={setShowModal}
         setVideoURL={setVideoURL}
      /> 
   );
   
   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.videos]} imagePath={'/images/banner2.png'} />
         <Container blur={showModal ? true : false}>
            <Gallery>
               {videos}
            </Gallery>
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
      { pageSize : 100 }
      )
      return {
         props: {
            content
         }
      }
}