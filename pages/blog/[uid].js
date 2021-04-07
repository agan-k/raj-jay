import React, { useState } from "react"
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Modal from "../../components/modal"

import style from "./post.module.css"

export default function Post({ data }) {
   const [showModal, setShowModal] = useState(false)
   console.log(data)
   return (
      
      <div className={style.container}>
         <h1>&larr;<Link href="/blog"><a>Blog Home</a></Link></h1>
         {data.video_link.length !== 0 ?
            <article>
               <img onClick={() => setShowModal(true)} src={data.img.url} style={{ maxHeight: "15rem" }} />
               <main>{RichText.render(data.content_body)}</main>
            </article> :
            <article>
               <img src={data.img.url} style={{ maxHeight: "15rem" }} />
               <main>{RichText.render(data.content_body)}</main>
            </article>
         }
         {showModal && (
            <Modal blog_video_url={data.video_link[0].text}
               closeModal={() => setShowModal(false)}
            />
         )}
      </div>
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
