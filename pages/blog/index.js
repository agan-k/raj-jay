import React from 'react'
import Head from 'next/head'
import styles from '../../styles/reviews.module.css'
import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"
import Link from "next/link"

export default function Blog(props) {
   
   const blog_posts = props.content.resuls

   return (
      <div>
         <article>
            
         </article>
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
