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
   console.log(quotes)

   
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
   const news_cards = cards.map((result) =>
      
      result.data.news_card && result.data.content_type == 'video' ?
         
         <div key={result.uid} className={style.card}
            onClick={() => setVideoURL(result.data.video_link[0].text)}
         >
            <a>
               <p className={style.date}>{formatPrismicDate(result.data.date)}</p>
               <img src={result.data.img.url} onClick={() => setShowModal(true)}/>
               {RichText.render(result.data.news_card_blurb)}
               <span className={style.arrow}>&rarr;</span>
            </a>
         </div> :

      (result.data.news_card && result.data.content_type !== 'video') ?
            
         <div key={result.uid} className={style.card}>
            <Link href={`/${result.data.content_type.substr(0, 5)}/${result.uid}`} >
               <a>
                  <p className={style.date}>{formatPrismicDate(result.data.date)}</p>
                  <img src={result.data.img.url}/>
                  {RichText.render(result.data.news_card_blurb)}
                  <span className={style.arrow}>&rarr;</span>
               </a>
            </Link>
         </div> : ''
   )      

   return (
      <Layout>

         <div className={style.container}>
            <div className={style.quotes_fade}
               // className={randomQuoteIndex ? style['quotes_fade'] : ''}
            >
               {RichText.render(quotes[randomQuoteIndex].data.press_quote)}
            </div>
            <div className={style.cta_buy_album}>
               <img src={'/images/cta_buy_album.jpg'} />
               <p>new album Pistils<br/> out now!</p>
               <Link href="https://pistils.bandcamp.com/album/pistils">
                  <p><a>buy / listen &rarr;</a></p>
               </Link>
            </div>

            <main className={style.main}>
               <img className={style.banner} src={'/images/home_banner.jpg'} />
               <img className={style.banner_mobile} src={'/images/mobile_home_banner2.jpg'} />
               
               <h2>News</h2>
               <div className={style.grid}>
                  {news_cards}
                </div>
   
               {showModal && (
                  <Modal
                     news_card_video_url={videoURL}
                     closeModal={() => setShowModal(false)}
                  />
               )}
            </main>
          </div>
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