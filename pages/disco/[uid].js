import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import style from './album.module.css'
import Layout from '../../components/layout'

export default function Album({ data }) {

   return (
      <Layout>
         <div className={style.container}>
            <Link href="/disco"><h4 style={{cursor: "pointer"}}>&larr; &nbsp;full discography</h4></Link>
            <main>
               <div className={style.album_info}>
                  <img src={data.img.url} />
                     {RichText.render(data.content_body)}
               </div>
               
               { RichText.asText(data.bandcamp_id) ?
                  <iframe 
                     style={{border: 0, height: '460px'}} 
                     src={`https://bandcamp.com/EmbeddedPlayer/album=${RichText.asText(data.bandcamp_id)}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/`} 
                     seamless 
                  /> : ''
               }
            </main>
         </div>
      </Layout>
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
