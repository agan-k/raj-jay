import React from 'react'
import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"
import BandcampPlayer from 'react-bandcamp'
import Link from 'next/link'

export default function Album({data}) {
   return (
      <div className="container">
         <h1>&larr;
         <Link href='/discography'><a>Discography</a></Link>

         </h1>
         <main>
            <div className="album_info">
               <img src={data.img.url} style={{maxHeight: '10rem'}}/>
               {RichText.render(data.content_body)}
            </div>
            <BandcampPlayer
               className='audio-player'
               album={data.bandcamp_id[0].text}
               width='40%'
               height='400px'
               artwork='none'
            />
         </main>

         <style jsx>{`
         // For {RichText.render(data.content_body)} styles
         // see global.css
         
         .container {
            font-size: .8rem;
            width: 100%;
            // height: min-content;
         }
         main {
            width: 70%;
            display: flex;
            justify-content: space-between;
            // background: yellow;
            margin: 0 auto;
         }
         .album_info {
            // color: red;
         }
         .album_info ul {
            list-style-type: none;
            color: blue;
         }
      `}</style>
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
