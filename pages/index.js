import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs"
import Link from 'next/link'
import Modal from '../components/modal'
import { Date } from 'prismic-reactjs';


export default class Home extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
            showModal: false
         }
   }
   
   handleVideoCard = (video_url) => {
      this.setState({
         showModal: !this.state.showModal,
         video_url: video_url
      })
   }

   closeModal = () => {
      this.setState({
         showModal: false
      })
   }

   render() {
      
      function formatDate(date) {
         let months = ["January","February","March","April","May","June","July",
            "August", "September", "October", "November", "December"];
         let month;
         let year = date.slice(0, 4);
         if (date.charAt(5) == '0') {
            month = months[date.slice(6, 7) -1];
         }
         else {
            month = months[date.slice(5, 7) -1]
         }
         return month + ' ' + year;
      }
      
      
   
      let cards = this.props.content.results.filter(item => item.data.news_card)
      const news_cards = cards.map((result) =>
         result.data.news_card && result.data.content_type == 'video' ?
            <div key={result.uid} className={styles.card}
               onClick={() => this.handleVideoCard(result.data)}
            >
               <img src={result.data.img.url}/>
               <p>{formatDate(result.data.date)}</p>
               {RichText.render(result.data.news_card_blurb)}
               <span style={{display: 'block', textAlign: 'right'}}>&rarr;</span>
            </div> :
         (result.data.news_card && result.data.content_type !== 'video') ?
            <div key={result.uid} className={styles.card}>
               <Link href={`${result.data.content_type.substr(0, 5)}/${result.uid}`} >
                  <a>
                     <img src={result.data.img.url}/>
                     <p>{formatDate(result.data.date)}</p>
                     {RichText.render(result.data.news_card_blurb)}
                     <span style={{display: 'block', textAlign: 'right'}}>&rarr;</span>
                  </a>
               </Link>
            </div> : ''
      )
      
      console.log(cards)
   
      // const news_cards = props.content.results.map(result =>
      //    result.data.news_card ?
      //       <div key={result.uid} className={styles.card}>
      //          <Link href={`${result.data.content_type.substr(0, 5)}/${result.uid}`} >
      //             <a>
      //                <img src={result.data.img.url}/>
      //                <p>{formatDate(result.data.date)}</p>
      //                {RichText.render(result.data.news_card_blurb)}
      //                <span style={{display: 'block', textAlign: 'right'}}>&rarr;</span>
      //             </a>
      //          </Link>
      //       </div> : ''
      // )

      return (
       <div className={styles.container}>
         <Head>
           <title>Create Next App</title>
           <link rel="icon" href="/favicon.ico" />
         </Head>
         
         <h1 className={styles.title}>
            Rajiv jayaweera
         </h1>
         <p className={styles.description}>Home of drummer Rajiv Jayaweera</p>
         <ul style={{display: 'flex', listStyle: 'none'}}>
            <li>
               <Link href="/press"><a>Press</a></Link>&nbsp;
               <Link href="/videos"><a>Videos</a></Link>&nbsp;
               <Link href="/photos"><a>Photos</a></Link>
            </li>
            <li></li>
            <li></li>
         </ul>
         
         <main className={styles.main}>
              <div className={styles.grid}>
                 {news_cards}
               </div>
               
               {this.state.showModal && (
                  <Modal
                     news_card_video={this.state.video_url}
                     closeModal={this.closeModal}
                  />
               )}

         </main>
   
         <footer className={styles.footer}>
           <a
             href="https://formversuscontent.com"
             target="_blank"
             rel="noopener noreferrer"
           >
             Site by&nbsp;{'FormVsContent'}
             {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
           </a>
         </footer>
       </div>
     )
   }
   
   
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      },
   )
   return {
      props: {
         content
      },
   }
}
