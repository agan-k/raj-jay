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
            <Link href="/blog"><h4 className={style.blog_home_link}>&larr; &nbsp;<a>blog home</a></h4></Link>
               {data.video_link.length !== 0 ?
               <article>
                  <div className={style.post_date}>
                     <p>{formattedDate}</p>
                  </div>
                  <img className={style.video_thumb} onClick={() => setShowModal(true)} src={data.img.url} />
                  <main>{RichText.render(data.content_body)}</main>
               </article> :
               <article>
                  <div className={style.post_date}>
                     <p>{formattedDate}</p>
                  </div>
                  <img className={style.title_image} src={data.img.url} />
                  <main>{RichText.render(data.content_body)}</main>
               </article>
            }
            {showModal && (
               <Modal blog_video_url={data.video_link[0].text}
                  closeModal={() => setShowModal(false)}
               />
            )}
         </div>
      </Layout>
   )
}

export async function getStaticProps({ params }) {
   const { uid } = params;
   const { data } = await client.getByUID("content", uid);
   return {
      props: { data },
   };
}

export async function getStaticPaths() {
   const { results } = await client.query(
      Prismic.Predicates.at("document.type", "content"),
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
