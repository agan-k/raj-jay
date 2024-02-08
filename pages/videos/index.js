import React, { useState } from 'react'
import Link from 'next/link'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import { RichText } from "prismic-reactjs"

import {Layout} from '../../components'
import Modal from '../../components/modal'
import { 
   Container,
   Gallery,
   Video,
} from './styled'

export default function Videos(props) {
   const [showModal, setShowModal] = useState(false);
   const [videoURL, setVideoURL] = useState(null);

   function HandleVideoLinkModal({url}) {
      setVideoURL(url);
      setShowModal(true);
   }
   
   const videos = props.content.results.filter(result =>
      result.data.content_type == 'video'
   )

   const gallery = videos.map((video) =>
      <Video key={video.uid}
         onClick={() => HandleVideoLinkModal({url: video.data.video_link[0].text})}
      >
         <img onClick={() => setShowModal(true)} src={video.data.img.url} />
         {RichText.render(video.data.video_caption)}
      </Video>
   )
   
   return (
      <Layout>
         <Container blur={showModal ? true : false}>
            <Gallery>
               {gallery}
            </Gallery>
         </Container>
         {showModal && (
            <Modal
               videos={true}
               video_url={videoURL}
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