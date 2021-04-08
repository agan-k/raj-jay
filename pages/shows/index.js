import React from 'react'
import Link from 'next/link'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import RichText from 'prismic-reactjs'

import style from './shows.module.css'

export default function Shows(props) {
   return (
      <div className={style.container}>
         <h1>&larr;
            <Link href="/"><a>Home</a></Link>
         </h1>
         <h1>Shows</h1>
         <p className={style.covid19}>
         DUE TO THE CURRENT SITUATION, UNFORTUNATELY MOST LIVE SHOWS HAVE BEEN CANCELLED/POSTPONED BUT PLEASE STAY TUNED FOR FURTHER UPDATES.
         </p>
      </div>
   )
}

export async function getStaticProps() {
   const shows = await client.getSingle("Shows")
   return {
      props: {
         shows
      }
   }
}
