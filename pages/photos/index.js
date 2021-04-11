import React, { useState } from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

import Layout from '../../components/layout'
import style from './photos.module.css'
import Modal from '../../components/modal'
import MaskToggleIcon from '../../components/MaskToggleIcon'

export default function Photos(props) {
   const [showModal, setShowModal] = useState(false)
   const [maskImages, setMaskImages] = useState(true)
   const [photo, setPhoto] = useState(null)

   function getImgOrientation(height, width) {
      if (height > width) {
         return 'vertical_img'
      } else {
         return 'horizontal_img'
      }
   }

   const photos = props.content.results.filter(result => 
      result.data.content_type == 'photo'
   )

   const gallery = photos.map(photo => 
      <div className={style.photo_container} key={photo.uid}>
         <div
            className={style[`${maskImages ? 'img_mask' : 'img_unmask'}`]}
            onClick={() => setPhoto(photo.data)}
         >
            <img
               onClick={() => setShowModal(true)}
               className={style[`${
                  getImgOrientation(photo.data.img.dimensions.height, photo.data.img.dimensions.width)}`]}
                  src={photo.data.img.url} />
         </div>
      </div>
   )

   return (
      <Layout>
         <div>
            <h1>&larr;
               <Link href="/"><a>Home</a></Link>
            </h1>
            <h1>photos</h1>
            <div onClick={() => setMaskImages(!maskImages)}>
            <MaskToggleIcon />
            </div>
            <div className={style.gallery_container}>
               {gallery}
            </div>
            {showModal && (
               <Modal
                  getImageOrientation={getImgOrientation}
                  closeModal={() => setShowModal(false)}
                  photo={photo}
                  photos={true}
               />
            )}
         </div>
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