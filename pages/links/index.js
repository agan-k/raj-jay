import React from 'react'
import Link from 'next/link'

import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'

import Layout from '../../components/layout'
import style from './links.module.css'

export default function Links(props) {
   const links = props.links.data.links_body;
   return (
      <Layout>
         <div className={style.container}>
            <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
            <h1>Links</h1>
            <div className={style.links_container}>
               {RichText.render(links)}
            </div>
         </div>
      </Layout>
   )
}
export async function getStaticProps() {
   const links = await client.getSingle("links")
   return {
      props: {
         links
      }
   }
}
