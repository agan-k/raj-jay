import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import style from './discography.module.css'
import Link from 'next/link'




export default function Discography(props) {
  
   const discography = props.content.results.filter(result =>
      result.data.content_type == 'discography'
      )
   console.log(discography)

   const albums_gallery = discography.map(album => 
      <div className={style.album_container}>
         <Link href="discography/[id]" as={`discography/${album.uid}`}>
            <img src={album.data.img.url} />
         </Link>
      </div>
      )
   
   return (
      <div className={style.container}>
         <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
         <h1>Disco</h1>
         {albums_gallery}
      </div>
   )
}
export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   )
   return {
      props: {
         content
      }
   }
}
