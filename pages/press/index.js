import Head from 'next/head'
import styles from '../../styles/reviews.module.css'
import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { React } from 'react'
import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function reviews(props) {
   console.log(props.content)

   const press_reviews = props.content.results.filter(result => 
      result.data.content_type == 'press/reviews'
   )
   const press_releases = props.content.results.filter(result => 
      result.data.content_type == 'press/releases'
   )
   const press_interviews = props.content.results.filter(result => 
      result.data.content_type == 'press/interviews'
   )
   const press_features = props.content.results.filter(result => 
      result.data.content_type == 'press/features'
   )
   
   return (
      <div className={styles.container}>
         <h1>&larr;
            <Link href="/">
               <a>
               Home
               </a>
            </Link>
         </h1>
         <h1>reviews</h1>
          <ul>
             {press_reviews.map((result) => (
                 <li key={result.uid} style={{ background: 'grey' }}>
                    <Link href="press/reviews/[id]" as={`press/reviews/${result.uid}`}>
                       <a>
                          {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
                          &nbsp; - &nbsp;
                          {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
                       </a>
                     </Link>
                  </li>
               ))}
         </ul>
         <hr />
         
         <h1>interviews</h1>
         <ul>
            {press_interviews.map((result) => (
               <li key={result.uid} style={{ background: 'red' }}>
                  <Link href="press/reviews/[id]" as={`press/reviews/${result.uid}`}>
                     <a>
                        {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
                        &nbsp; - &nbsp;
                        {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
                     </a>
                  </Link>
               </li>
            ))}
         </ul>
         <hr />
         
         <h1>press releases</h1>
         <ul>
            {press_releases.map((result) => (
               <li key={result.uid} style={{ background: 'green' }}>
                  <Link href="press/reviews/[id]" as={`press/reviews/${result.uid}`}>
                     <a>
                        {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
                        &nbsp; - &nbsp;
                        {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
                     </a>
                  </Link>
               </li>
            ))}
         </ul>
        <hr/>
         <h1>features</h1>
         
         <ul>
            {press_features.map((result) => (
               <li key={result.uid} style={{ background: 'yellow' }}>
                  <Link href="press/reviews/[id]" as={`press/reviews/${result.uid}`}>
                     <a>
                        {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
                        &nbsp; - &nbsp;
                        {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
                     </a>
                  </Link>
               </li>
            ))}
         </ul>
        <hr/>
      </div>
   )
}
export async function getStaticProps() {
   // const press = await client.query(
   //    Prismic.Predicates.at("document.type", "press")
   // )
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content")
   )
   return {
      props: {
         // press,
         content
      },
   }
}

