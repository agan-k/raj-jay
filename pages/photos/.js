import React, { Component, useState } from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import style from './photos.module.css'
import Modal from '../../components/modal'
import MaskToggleIcon from '../../components/MaskToggleIcon'

export default function Photos() {
   const [showModal, setShowModal] = useState(false)

   getImgOrientation = (height, width) => {
      if (height > width) {
         return 'vertical_img'
      } else {
         return 'horizontal_img'
      }
   }
   const photos = this.props.content.results.filter(result => 
      result.data.content_type == 'photo'
   )

   const gallery = photos.map(photo => 
      <div className={style.photo_container} key={photo.uid}>
         <div className={style[`${this.state.maskImages ? 'img_mask' : 'img_unmask'}`]}>
            <img
               onClick={() => setShowModal(true)}
               className={style[`${this.
                  getImgOrientation(photo.data.img.dimensions.height, photo.data.img.dimensions.width)}`]}
                  src={photo.data.img.url} />
         </div>
      </div>
   )

      return (
         <div>
            <h1>&larr;
               <Link href="/"><a>Home</a></Link>
            </h1>
            <h1>photos</h1>
            <div onClick={() => this.toggleMask()}>
              <MaskToggleIcon />
            </div>
            <div className={style.gallery_container}>
               {gallery}
            </div>

            {showModal && (
               <Modal
               />
            )}
         </div>
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

