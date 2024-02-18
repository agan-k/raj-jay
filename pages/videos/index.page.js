import React, { useState } from 'react'

import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';

import {Layout, Modal} from '../../components';
import Video from './components/Video';
import {Container, Gallery} from './styled'

export default function Videos(props) {
   const [showModal, setShowModal] = useState(false);
   const [videoURL, setVideoURL] = useState(null);
   
   const videosData = props.content.results.filter(result =>
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