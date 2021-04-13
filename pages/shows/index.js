import React from 'react'
import Link from 'next/link'

import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../../components/layout'
import style from './shows.module.css'
import {current_date} from '../Date.js'

export default function Shows(props) {
   console.log(props.shows.data.featured_flyer.url)
   const announcement = props.shows.data.announcement
   const recent_updates = props.shows.data.recent_updates
   const calendar = props.shows.data.shows_body
   
   return (
      <Layout>
         <div className={style.container}>

            <main className={style.main}>
               <img className={style.banner} src={props.shows.data.banner_image.url}/>
               {/* <div className={style.announcement}>
                  {RichText.render(announcement)}
               </div> */}
               <div className={style.calendar_container}>
                  <main>
                     {RichText.render(calendar)}
                  </main>
                  <aside>
                     <img className={style.featured_flyer}
                        src={props.shows.data.featured_flyer.url}
                     />
                  </aside>
               </div>
            </main>
         </div>
      </Layout>
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
