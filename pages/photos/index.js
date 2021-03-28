import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import style from './photos.module.css'

export default class Photos extends Component {
   constructor(props) {
      console.log(props)
      super()
      this.state = {
         showModal: false
      }
   }
   render() {
      const photos = this.props.content.results.filter(result => 
         result.data.content_type == 'photo'
      )
      console.log(photos)
      const gallery = photos.map(result => 
         result.data.img.dimensions.height > result.data.img.dimensions.width ?
         <div className={style.photo_container}>
               <img className={style.vertical_img} src={result.data.img.url} />
         </div> :
         <div className={style.photo_container}>
               <img className={style.horizontal_img} src={result.data.img.url} /> 
         </div>
      )
      return (
         <div>
            <h1>photos</h1>
            <div className={style.gallery_container}>
               {gallery}

            </div>
         </div>
      )
   }
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content")
   )
   return {
      props: {
         content
      }
   }
}

