import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs"
import formatPrismicDate from './formatPrismicDate.js'

import Layout1 from '../components/layout1'
import Modal from '../components/modal'
import style from './Home.module.css'

export default function Home(props) {
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
      
   let cards = props.content.results.filter(item => item.data.news_card)
   const news_cards = cards.map((result) =>
      
      result.data.news_card && result.data.content_type == 'video' ?
         
         <div key={result.uid} className={style.card}
            onClick={() => setVideoURL(result.data.video_link[0].text)}
         >
            <img src={result.data.img.url} onClick={() => setShowModal(true)}/>
            <p>{formatPrismicDate(result.data.date)}</p>
            {RichText.render(result.data.news_card_blurb)}
            <span style={{display: 'block', textAlign: 'right'}}>&rarr;</span>
         </div> :

      (result.data.news_card && result.data.content_type !== 'video') ?
            
         <div key={result.uid} className={style.card}>
            <Link href={`${result.data.content_type.substr(0, 5)}/${result.uid}`} >
               <a>
                  <img src={result.data.img.url}/>
                  <p>{formatPrismicDate(result.data.date)}</p>
                  {RichText.render(result.data.news_card_blurb)}
                  <span style={{display: 'block', textAlign: 'right'}}>&rarr;</span>
               </a>
            </Link>
         </div> : ''
   )      

   return (
      <Layout1>
         <div className={style.container}>
            
            <main className={style.main}>
            <img className={style.banner} src={'/images/home_banner.jpg'}/>
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
      </Layout1>
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