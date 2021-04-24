import React from "react"
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from "../../components/layout"
import style from "./pressArticle.module.css"

export default function pressArticle({ data }) {
   return (
      <Layout>
         <div className={style.container}>

         <Link href="/press"><h4 style={{cursor: "pointer", maxWidth: "8rem"}}>&larr; &nbsp;<a>press home</a></h4></Link>

            <article>
               <img src={data.img.url} style={{maxHeight: '3rem'}}/>
               <main>{RichText.render(data.content_body)}</main>
            </article>
         </div>
      </Layout>
   );
 }

export async function getStaticProps({ params }) {
   const { uid } = params;
   const { data } = await client.getByUID("content", uid);
   return {
      props: { data }
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