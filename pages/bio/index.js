import React from 'react'

import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import { Layout } from '../../components';
import style from './bio.module.css'

export default function Bio(props) {
   
   return (
      <Layout>
         <div className={style.container}>
            {/* <h2>Bio</h2> */}
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
