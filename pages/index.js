import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../components/layout'
import Modal from '../components/modal'
import style from './Home.module.css'

export default function Home(props) {
console.log(props)
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
   const [randomQuoteIndex, setRandomQuoteIndex] = useState(6)

   useEffect(() => {
      const index = setInterval(() => {
        setRandomQuoteIndex(randomQuoteIndex => Math.floor(Math.random() * quotes.length));
      },10000);
      return () => clearInterval(index);
    }, []);

   const quotes = props.content.results.filter(result => 
      result.data.press_quote.length !== 0
   )
   const mobile_quote_index = Math.floor(Math.random() * quotes.length);
  

   

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
      
   let cards = props.content.results.filter(item => item.data.news_card)
   console.log(cards)
   const news_cards = cards.map((item) =>
      
      item.data.video_link.length > 0 ?
         
         <div key={item.uid} className={style.card}
            onClick={() => setVideoURL(item.data.video_link[0].text)}
         >
            <p className={style.date}>{formatPrismicDate(item.data.date)}</p>
            <img src={item.data.img.url} onClick={() => setShowModal(true)}/>
            {RichText.render(item.data.news_card_blurb)}
            <span className={style.arrow}>&rarr;</span>
         </div>
         :
         <div key={item.uid} className={style.card}>
            <Link href={`/${item.data.content_type.substr(0, 5)}/${item.uid}`} >
               <p className={style.date}>{formatPrismicDate(item.data.date)}</p>
               <img src={item.data.img.url}/>
               {RichText.render(item.data.news_card_blurb)}
               <span className={style.arrow}>&rarr;</span>
            </Link>
         </div>
   )      

   return (
      <Layout>

         <div className={showModal ? style['container_blur'] : style['container']}>
            <div className={style.quotes_fade}
            >
               {RichText.render(quotes[randomQuoteIndex].data.press_quote)}
            </div>

            <main className={style.main}>
               <img className={style.banner} src={'/images/home_banner.jpg'} />
               <img className={style.banner_mobile} src={'/images/mobile_home_banner3.jpg'} />
               
            <div className={style.cta_buy_album}>
               <img src={'/images/cta_buy_album.jpg'} />
               <p>new album Pistils<br/> out now!</p>
               <Link href="https://pistils.bandcamp.com/album/pistils">
                  <p>listen / buy &rarr;</p>
               </Link>
            </div>
               <div className={style.grid}>
                  {news_cards}
                </div>
   
            </main>
          </div>
               {showModal && (
                  <Modal
                     news_card_video_url={videoURL}
                     closeModal={() => setShowModal(false)}
                  />
               )}
      </Layout>
   )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   )
   return {
      props: {
         content
      },
   }
}