import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs";
import Link from 'next/link'


export default function Home(props) {
   console.log(props)
   
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
            <Link href="/press">
               <a>
                  Press
               </a>
            </Link>
         </li>
         <li></li>
         <li></li>
      </ul>
      
      <main className={styles.main}>
           <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://formversuscontent.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site by{'form vs content'}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
   // const news_cards = await client.query(
   //    Prismic.Predicates.at("document.type", "news_card"),
   //    { orderings: "[my.news_card.date desc]" }
   // )
   const press = await client.query(
      Prismic.Predicates.at("document.type", "press")
   )
   return {
      props: {
         press
      },
   }
}
