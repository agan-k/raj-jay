import React, { useState } from 'react'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

import style from './photos.module.css'
import {Layout} from '../../components';
import {Box} from '../../components';
import Modal from '../../components/modal';
import {
   Container,
   Gallery,
   Photo,
   ImageMask,
} from './styled';

export default function Photos(props) {
   const [showModal, setShowModal] = useState(false)
   const [photo, setPhoto] = useState(null)

   function getImgOrientation(height, width) {
      if (height > width) {
         return 'vertical'
      } else {
         return 'horizontal'
      }
   }

   const photos = props.content.results.filter(result => 
      result.data.content_type == 'photo'
   )

   const gallery = photos.map(photo => 
      <Photo key={photo.uid}>
         {console.log(getImgOrientation(
                  photo.data.img.dimensions.height, 
                  photo.data.img.dimensions.width
               ))}
         <ImageMask
            onClick={() => setPhoto(photo.data)}
         >
            <img
               src={photo.data.img.url}
               onClick={() => setShowModal(true)}
               orientation={getImgOrientation(
                  photo.data.img.dimensions.height, 
                  photo.data.img.dimensions.width
               )}
            />
         </ImageMask>
      </Photo>
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
               getImageOrientation={getImgOrientation}
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
   )
   return {
      props: {
         content
      }
   }
}