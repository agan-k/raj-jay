import React from 'react'
import Link from 'next/link'

import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../../components/layout1'

import style from './bio.module.css'

export default function Bio(props) {
   
   return (
      <Layout>
         <div className={style.container}>
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
