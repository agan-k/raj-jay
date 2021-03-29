import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs"
import Link from 'next/link'


export default function Home(props) {
   console.log(props)

   const news_cards = props.content.results.map(result =>
      result.data.news_card ?
         <div key={result.uid} className={styles.card}>
            <Link href={`${result.data.content_type.substr(0, 5)}/${result.uid}`} >
               <a>
                  <img src={result.data.img.url}/>
                  {RichText.render(result.data.news_card_blurb)}
                  <span style={{display: 'block', textAlign: 'right'}}>&rarr;</span>
               </a>
            </Link>
         </div> : ''
   )
   
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
            <Link href="/photos"><a>Photos</a></Link>
         </li>
         <li></li>
         <li></li>
      </ul>
      
      <main className={styles.main}>
           <div className={styles.grid}>
              {news_cards}
           </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://formversuscontent.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site by&nbsp;{'form vs content'}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content")
   )
   return {
      props: {
         content
      },
   }
}
