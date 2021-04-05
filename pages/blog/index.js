import React from 'react'
import Head from 'next/head'
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import getContentPaths from '../contentPaths'
import styles from './blog.module.css'

export default function Blog(props) {
   
   const blog = props.content.results.filter(result =>
      result.data.content_type == 'blog'
   )

   return (
      <div className={styles.container}>
         <h1>&larr;
            <Link href="/"><a>Home</a></Link>
         </h1>
         <h1>BlogPosts</h1>
         {blog.map(result =>
            <div className={styles.post_container}>
               {/* <li key={result.uid}> */}
               {/* <Link href="blog/[id]" as={`${getContentPaths(blog)}/${result.uid}`}> */}
               {/* <a> */}
               {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}&nbsp;
               <img src={result.data.img.url} />
               {/* </a> */}
               {/* </Link> */}
               {/* </li> */}
            </div>
         )}
      </div>
   )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   );
   return {
      props: {
         content
      }
   };
}
