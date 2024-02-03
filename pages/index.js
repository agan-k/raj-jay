import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs";
import formatPrismicDate from '../utils/formatPrismicDate';

import { Layout, NewsCards } from '../components'
import Modal from '../components/modal'
import style from './Home.module.css'

export default function Home({content}) {
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
   const [randomQuoteIndex, setRandomQuoteIndex] = useState(6)

   useEffect(() => {
      const index = setInterval(() => {
        setRandomQuoteIndex(randomQuoteIndex => Math.floor(Math.random() * quotes.length));
      },10000);
      return () => clearInterval(index);
    }, []);

   const quotes = content.results.filter(result => 
      result.data.press_quote.length !== 0
   );
   const cards = content.results.filter(item => item.data.news_card);   

   return (
      <Layout>
         <div className={showModal ? style['container_blur'] : style['container']}>
            <div className={style.quotes_fade}
            >
               {RichText.render(quotes[randomQuoteIndex].data.press_quote)}
            </div>

            <div className={style.main}>
               <img className={style.banner} src={'/images/home_banner.jpg'} />
               <img className={style.banner_mobile} src={'/images/mobile_home_banner3.jpg'} />
               
               <div className={style.cta_buy_album}>
                  <img src={'/images/cta_buy_album.jpg'} />
                  <p>new album Pistils<br/> out now!</p>
                  <Link href="https://pistils.bandcamp.com/album/pistils">
                     <p>listen / buy &rarr;</p>
                  </Link>
               </div>
               <NewsCards cards={cards} />
            </div>
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