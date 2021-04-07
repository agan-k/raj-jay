import React from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import style from './discography.module.css'
import Link from 'next/link'

export default function Discography(props) {
  
   const discography = props.content.results.filter(result =>
      result.data.content_type == 'discography'
   )
   
   const albums_gallery = discography.map(album => 
      <div className={style.album_container}>
         <Link href="disco/[id]" as={`disco/${album.uid}`}>
            <img src={album.data.img.url} />
         </Link>
      </div>
   )
   
   return (
      <div className={style.container}>
         <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
         <h1>Discography</h1>
         <div className={style.gallery_container} >
            {albums_gallery}
         </div>
      </div>
   )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   )
   return {
      props: {
         content
      }
   }
}
