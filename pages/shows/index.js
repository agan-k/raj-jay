import React from 'react'
import Link from 'next/link'

import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../../components/layout'
import MailingList from '../../components/mailingList'
import style from './shows.module.css'

export default function Shows(props) {

   const calendar = props.shows.data.shows_body
   
   return (
      <Layout>
         <div className={style.container}>
            
            <img className={style.banner} src={props.shows.data.banner_image.url} />
            
            <div className={style.calendar_container}>
               <div className={style.mailing_list}>
                  <p>Join the mailing list to find out about upcoming events
                     in your area.</p>
                  <MailingList />
               </div>
               <main>
                  {RichText.render(calendar)}
               </main>
               <aside>
                  <img className={style.featured_flyer}
                     src={props.shows.data.featured_flyer.url}
                  />
                  <img className={style.featured_flyer}
                     src={props.shows.data.featured_flyer1.url}
                  />
                  <img className={style.featured_flyer}
                     src={props.shows.data.featured_flyer2.url}
                  />
                  <div className={style.mailing_list}>
                     <p>Join the mailing list to find out about upcoming events
                        in your area.
                     </p>
                     <MailingList />
                  </div>
               </aside>
            </div>
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
