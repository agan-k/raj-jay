import React from 'react'
import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import style from './bio.module.css'

export default function Bio(props) {
   console.log(props)
   return (
      <div className={style.container}>
         <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
         {RichText.render(props.bio.results[0].data.bio_body)}
      </div>
   )
}
export async function getStaticProps() {
   const bio = await client.query(
      Prismic.Predicates.at("document.type", "bio")
   )
   return {
      props: {
         bio
      }
   }
}
