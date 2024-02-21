import React, { useState } from 'react'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import {Layout, Modal, Banner} from '../../components';
import isVerticalImage from '../../utils/isVerticalImage';
import HandleMediaLinkModal from '../../utils/handleMediaLinkModal';
import { BANNER_QUOTE } from '../../utils/constants';
import {
   Container,
   Gallery,
   Photo,
   Image,
} from './styled';

export default function Photos({content}) {
   const [showModal, setShowModal] = useState(false);
   const [photo, setPhoto] = useState(null);

   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 

   const photos = content.results.filter(result => 
      result.data.content_type == 'photo'
   );
      console.log(photos)
   const gallery = photos.map(photo => 
      <Photo 
         key={photo.uid} 
         onClick={() => HandleMediaLinkModal({
            url: photo.data, 
            setShowModal: setShowModal,
            setMediaURL: setPhoto,
         })}>
         <Image
            src={photo.data.img.url}
            vertical={isVerticalImage({
               height: photo.data.img.dimensions.height, 
               width: photo.data.img.dimensions.width
            })}
         />
      </Photo>
   )

   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.photos]} $imagePath={'/images/banner2.png'} />
         <Container blur={showModal ? true : false}>
            <Gallery>
               {gallery}
            </Gallery>
         </Container>
         
         {showModal && (
            <Modal
               closeModal={() => setShowModal(false)}
               photo={photo}
               photos={true}
            />
         )}
      </Layout>
   )
      
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize : 100 }
   );
   return {
      props: {
         content
      }
   };
}