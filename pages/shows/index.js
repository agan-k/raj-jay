import React from 'react'
import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../../components/layout'
import MailingList from '../../components/mailingList'
import style from './shows.module.css'

export default function Shows(props) {

   console.log(props.calendar_listings.results)
   const dates = props.calendar_listings.results.map(item => 
      item.data.date
   )
   console.log(dates)

   function formatPrismicDate(date) {
      let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
      let day;
      let month;
      let year = date.slice(0, 4);
      
      if (date.charAt(8) == '0') {
         day = date.slice(9, 10);
      }
      else {
         day = date.slice(8, 10);
      }
      if (date.charAt(5) == '0') {
         month = months[date.slice(6, 7) - 1];
      }
      else {
         month = months[date.slice(5, 7) -1]
      }
      return month + ' ' + day + ', ' + ' ' + year;
   }
   
   const calendar_listings = props.calendar_listings.results.map(listing =>
      <div className={style.calendar_listing}>
         <p>
            {formatPrismicDate(listing.data.date)}
         </p>

      </div>
      )
   return (
      <Layout>
         <div className={style.container}>
            
            {/* <img className={style.banner} src={props.shows.data.banner_image.url} /> */}
            
            <div className={style.calendar_container}>
               <div className={style.mailing_list}>
                  <p>Join the mailing list to find out about upcoming events
                     in your area.</p>
                  <MailingList />
               </div>
               <main>
                  {/* {RichText.render(calendar)} */}
                  {calendar_listings}
               </main>
               <aside>
                  {/* <img className={style.featured_flyer}
                     src={props.shows.data.featured_flyer.url}
                  />
                  <img className={style.featured_flyer}
                     src={props.shows.data.featured_flyer1.url}
                  />
                  <img className={style.featured_flyer}
                     src={props.shows.data.featured_flyer2.url}
                  /> */}
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
   const calendar_listings = await client.query(
      Prismic.Predicates.at("document.type", "calendar_listing"),
      { pageSize: 100 }
   );
   return {
      props: {
         calendar_listings
      }
   }
}
