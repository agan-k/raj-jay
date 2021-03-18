import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"

export default function Home(props) {
   console.log(props.news_cards.results)
   const cards = props.news_cards.results.map(item => 
      <a href="#" className={styles.card}>
         <img src={item.data.news_card_image.url} />
            <h3>{item.data.title[0].text} &rarr;</h3>
         <p>{item.data.news_card_date[0].text}</p>
         <p>{item.data.news_card_blurb[0].text}</p>
          </a>
      )
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rajiv jayaweera
        </h1>

        <p className={styles.description}>
          Home of drummer Rajiv jayaweera
        </p>

         <div className={styles.grid}>
            {cards}
          
         </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://formversuscontent.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site by{' form vs content'}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
   const news_cards = await client.query(
      Prismic.Predicates.at("document.type", "news_card"),
      { orderings: "[my.news_card.date desc]" }
   )
   return {
      props: {
         news_cards
      },
   }
}
