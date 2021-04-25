import React, { useState } from "react"
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText, Date } from "prismic-reactjs"

// import ReactPlayer from 'react-player'

import Layout from "../../components/layout"
import Modal from "../../components/modal"
import style from "./post.module.css"

export default function Post({ data }) {
   console.log(data)
   const [showModal, setShowModal] = useState(false)

   const date = Date(data.date);
   const formattedDate = Intl.DateTimeFormat('en-US',{
      year: 'numeric',
      month: 'short',
      day: '2-digit' }).format(date);

   return (
      <Layout>
         <div className={style.container}>
         <Link href="/blog"><h4 style={{cursor: "pointer"}}>&larr; &nbsp;<a>blog home</a></h4></Link>
            {data.video_url.length !== 0 ?
               <article>
                  <div className={style.post_date}>
                     <p>{formattedDate}</p>
                  </div>
                  <img className={style.video_thumb} onClick={() => setShowModal(true)} src={data.title_image.url} />
                  <main>{RichText.render(data.post_body)}</main>
               </article> :
               <article>
                  <div className={style.post_date}>
                     <p>{formattedDate}</p>
                  </div>
                  <img src={data.img.url} />
                  <main>{RichText.render(data.post_body)}</main>
               </article>
            }
            {showModal && (
               <Modal blog_video_url={data.video_url[0].text}
                  closeModal={() => setShowModal(false)}
               />
            )}
         </div>
      </Layout>
   )
}

export async function getStaticProps({ params }) {
   const { uid } = params;
   const { data } = await client.getByUID("blog_post", uid);
   return {
      props: { data },
   };
}

export async function getStaticPaths() {
   const { results } = await client.query(
      Prismic.Predicates.at("document.type", "blog_post"),
      {pageSize : 100}
   )
   const paths = results.map(result => ({
      params: {
         uid: result.uid
      }
   }))
   return {
      paths,
      fallback: false,
   }
}
