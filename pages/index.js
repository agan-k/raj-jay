import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import { RichText } from "prismic-reactjs";


export default function Home(props) {
   console.log(props.press)
   console.log(props.press.results)

   // ++++++++++++++ press type +++++++++++++++++++++++++

   const press_type = props.press.results.map(result =>
      result.data.press_type
   )
   const press_logo = props.press.results.map(result =>
      result.data.logo.url ?
         <img src={result.data.logo.url} style={{display: 'block'}} /> : ''
   )

   const press_publication = props.press.results.map(result => result.data.publication.map(publication =>
      <h3>{publication.text}</h3>
   ))

   const press_date = props.press.results.map(result =>
      <p>{result.data.date}</p>
   )

   const press_title = props.press.results.map(result => result.data.article_title.map(article_title =>
      <h3>{article_title.text}</h3>
   ))
   
   const press_subject = props.press.results.map(result => result.data.article_subject.map(article_subject =>
      <h3>{article_subject.text}</h3>
   ))
   
   const press_body = props.press.results.map(result => result.data.press_body.map(paragraph =>
      <p>{paragraph.text}</p>
   ))
      
   const press_link = props.press.results.map(result => 
      <a href={result.data.link.url}>link</a>
   )

   // const press_list = 

   const press_model = [press_type, press_logo, press_publication, press_date, press_subject, press_title, press_body, press_link]
   let press_single = [];
   let press_all = [];
   for (let i = 0; i < props.press.results.length; i++) {
      for (let j = 0; j < press_model.length; j++) {
         press_single.push(press_model[j][i]);
         if (press_single.length == press_model.length) {
            press_all.push(press_single);
            press_single = [];
         };
      };
   };
   console.log(press_all)
   console.log(press_all[0][2])
   // ++++++++++++++++++++++++++++++++++++++++++ press type end 
   
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
           
         <div>
            {/* {press_all.filter(item => item.)} */}
         </div>
           



           {/* <div className={styles.grid}>
         </div> */}
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
