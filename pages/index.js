import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs";


export default function Home(props) {
   console.log(props.press)
   console.log(props.press.results)
   
   const press_publication = props.press.results.map(result => result.data.publication.map(publication =>
      <h3 style={{width: '100%', margin: '0'}}>{publication.text}</h3>
   ))
   console.log(press_publication)

   const press_date = props.press.results.map(result =>
      <p style={{width: '100%', margin: '0'}}>{result.data.date}</p>
   )
   console.log(press_date)

   const press_title = props.press.results.map(result => result.data.article_title.map(article_title =>
      <h3 style={{width: '100%', margin: '0'}}>{article_title.text}</h3>
   ))
   console.log(press_title)
   
   const press_subject = props.press.results.map(result => result.data.article_subject.map(article_subject =>
      <h3 style={{width: '100%', margin: '0'}}>{article_subject.text}</h3>
   ))
   console.log(press_subject)
   
   const press_body = props.press.results.map(result => result.data.press_body.map(paragraph =>
      <p style={{width: '100%'}}>{paragraph.text}</p>
   ))
   console.log(press_body)
      
   const press_link = props.press.results.map(result => 
      <a style={{width: '100%'}} href={result.data.link.url}>link</a>
   )
   console.log(press_link)
   console.log(props.press.results.length)

   const article_sections = [press_publication, press_date, press_subject, press_title, press_body, press_link]
   console.log(article_sections)
   let article = [];
   let articles = [];
   for (let i = 0; i < props.press.results.length; i++) {
      for (let j = 0; j < article_sections.length; j++) {
         article.push(article_sections[j][i]);
         if (article.length == article_sections.length) {
            articles.push(article);
            article = [];
         };
      }
   }
   
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
              {articles}
         </div>
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
   const news_cards = await client.query(
      Prismic.Predicates.at("document.type", "news_card"),
      { orderings: "[my.news_card.date desc]" }
   )
   const press = await client.query(
      Prismic.Predicates.at("document.type", "press")
   )
   return {
      props: {
         news_cards,
         press
      },
   }
}
