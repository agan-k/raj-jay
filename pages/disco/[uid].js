import React from 'react'
import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"
import BandcampPlayer from 'react-bandcamp'
import Link from 'next/link'
import style from './album.module.css'

export default function Album({data}) {
   return (
      <div className={style.container}>
         <h1>&larr;
            <Link href='/disco'><a>Discography</a></Link>
         </h1>
         <main>
            <div className={style.album_info}>
               <img src={data.img.url} style={{maxHeight: '10rem'}}/>
               {RichText.render(data.content_body)}
            </div>
            {data.bandcamp_id[0].text && (
               <BandcampPlayer
                  className='audio-player'
                  album={data.bandcamp_id[0].text}
                  width='40%'
                  height='460px'
                  artwork='none'
               />
            )}
         </main>
      </div>
   )
}

export async function getStaticProps({ params }) {
   const { uid } = params;
   const { data } = await client.getByUID("content", uid);
   return {
      props: {
         data
      }
   }
}

export async function getStaticPaths() {
   const { results } = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   )
   const paths = results.map(result => ({
      params: {
         uid: result.uid,
      }
   }))
   return {
      paths,
      fallback: false
   }
}
