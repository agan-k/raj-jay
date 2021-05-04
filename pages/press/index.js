import  React, { useState }  from 'react'
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import Layout from '../../components/layout'
import style from './press.module.css'

export default function Press(props) {
   const [quotesShow, setQuotesShow] = useState(false)

   function getContentPaths(currentContentType) {
      const path = currentContentType.map(result => 
         result.data.content_type.substr(0, 5)
         );
      return path[0];
   }

   // ---> Reviews
   const press_reviews = props.content.results.filter(result => 
      result.data.content_type == 'press-reviews'
   )
   const reviews = press_reviews.map(result => 
      <li className={style.article_link} key={result.uid}>
         {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
         <Link href="/press/[id]" as={`/${getContentPaths(press_reviews)}/${result.uid}`}>
            <a>
               {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
            </a>
         </Link>
      </li>
   )

   // ---> Press releases
   const press_releases = props.content.results.filter(result => 
      result.data.content_type == 'press-releases'
   )
   const releases = press_releases.map(result => 
      <li className={style.article_link} key={result.uid}>
         {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
         <Link href="/press/[id]" as={`/${getContentPaths(press_releases)}/${result.uid}`}>
            <a>
               {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
            </a>
         </Link>
      </li>
   )

   // ---> Interviews
   const press_interviews = props.content.results.filter(result => 
      result.data.content_type == 'press-interviews'
   )
   const interviews = press_interviews.map(result => 
      <li className={style.article_link} key={result.uid}>
         {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
         <Link href="/press/[id]" as={`/${getContentPaths(press_interviews)}/${result.uid}`}>
            <a>
               {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
            </a>
         </Link>
      </li>
   )

   // ---> Features
   const press_features = props.content.results.filter(result => 
      result.data.content_type == 'press-features'
   )
   const features = press_features.map(result => 
      <li className={style.article_link} key={result.uid}>
         {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
         <Link href="/press/[id]" as={`/${getContentPaths(press_features)}/${result.uid}`}>
            <a>
               {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
            </a>
         </Link>
      </li>
   )

   const quotes_source = props.content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   )
   const quotes = quotes_source.map(result =>
      <div className={style.quote}>
         { RichText.render(result.data.press_quote) }
      </div>
   )
   console.log(quotes)

   
   return (
      <Layout>
         <div className={style.container}>
            
            <div className={style.quoteS_container_mobile}>
               <h4>quotes</h4>
               <div className={style['quotes_toggle']} onClick={() => setQuotesShow(!quotesShow)}>
                  <div className={!quotesShow ? style['open_icon'] : style['close_icon']}>
                  </div>
               </div>
               <div className={quotesShow ? style['quoteS_open'] : style['quoteS']}>
                  <>{quotes}</>
               </div>
            </div>

            <div className={style.quoteS_container}>
               <h4>quotes</h4>
                  {quotes}
            </div>

            <div className={style.article_linkS_container}>

               <h4>press releases</h4>
               <ul>{releases}</ul>

               <h4>reviews</h4>
               <ul>{reviews}</ul>

               <h4>interviews</h4> 
               <ul>{interviews}</ul>

               <h4>features</h4>
               <ul>{features}</ul>

            </div>
         </div>
      </Layout>
   )
}
export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   );
   return {
      props: {
         content
      },
   };
}

