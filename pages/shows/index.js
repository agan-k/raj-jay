import React from 'react'
import Link from 'next/link'

import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import style from './shows.module.css'
import {current_date} from '../Date.js'

export default function Shows(props) {
   
   const announcement = props.shows.data.announcement
   const recent_updates = props.shows.data.recent_updates
   const calendar = props.shows.data.shows_body
   
   return (
      <div className={style.container}>
         <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
         <h1>Shows</h1>
         <div className={style.announcement}>
            {RichText.render(announcement)}
         </div>
         <div className={style.calendar_container}>
            <main>
               {RichText.render(calendar)}
            </main>
            <aside>
               <h3>Recent Updates</h3>
               <h3>{current_date}</h3>
               {/* <h3>{formatDate(date)}</h3> */}
               {RichText.render(recent_updates)}
            </aside>
         </div>
      </div>
   )
}
export async function getStaticProps() {
   const shows = await client.getSingle("shows")
   return {
      props: {
         shows
      }
   }
}
