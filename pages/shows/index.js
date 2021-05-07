import React from 'react'
import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../../components/layout'
import MailingList from '../../components/mailingList'
import style from './shows.module.css'

export default function Shows(props) {
   console.log(props)

   const past_shows = RichText.render(props.shows.data.shows_body)

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
      <div key={listing.id} className={style.calendar_listing}>
         <div className={style.date}>{formatPrismicDate(listing.data.date)}</div>
         <div className={style.venue}>
            {RichText.render(listing.data.venue)}
         </div>
         <div className={style.headlining_artist}>
            {RichText.render(listing.data.headlining_artist)}
         </div>
         <ul>{listing.data.lineup.map(list_item =>
            <li key={list_item.text}>{list_item.text}</li>
         )}</ul>
         <div className={style.address}>
            <div className={style.street}>
               {RichText.render(listing.data.street_address)}
            </div>
            <div className={style.city}>
               {RichText.render(listing.data.city)}
            </div>
            &nbsp;
            <div className={style.country}>
               {RichText.render(listing.data.country)}
            </div>
            &nbsp;
            {listing.data.map_link.url && (
               <a href={listing.data.map_link.url} target="_blank">
                  <img className={style.map_icon} src="/icons/location-icon.png" /></a>
            )}
         </div>
         
         
            {listing.data.links.length !== 0 && (
            <div className={style.links}>
               <img className={style.link_icon} src="/icons/link-icon.png" />
               {RichText.render(listing.data.links)}
         </div>
            )}
      </div>
      )

  
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
                  {calendar_listings}
                  <div className={style.past_shows}>
                     {past_shows}
                  </div>
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
   const shows = await client.getSingle("shows");

   const calendar_listings = await client.query(
      Prismic.Predicates.at("document.type", "calendar_listing"),
      { pageSize: 100 }
   );
   return {
      props: {
         shows,
         calendar_listings
      }
   }
}
