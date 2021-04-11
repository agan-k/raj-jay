import React from 'react'
import Link from 'next/link'

import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../../components/layout'

import style from './bio.module.css'

export default function Bio(props) {
   
   return (
      <Layout>
         <div className={style.container}>
            <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
            {RichText.render(props.bio.data.bio_body)}
         </div>
      </Layout>
   )
}
export async function getStaticProps() {
   const bio = await client.getSingle("bio")
   return {
      props: {
         bio
      }
   }
}
