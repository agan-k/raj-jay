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
      result.data.content_type == 'press-reviews'
   )
   const press_releases = props.content.results.filter(result => 
      result.data.content_type == 'press-releases'
   )
   const press_interviews = props.content.results.filter(result => 
      result.data.content_type == 'press-interviews'
   )
   const press_features = props.content.results.filter(result => 
      result.data.content_type == 'press-features'
   )

   const press_path = 'result.data.content_type.substr(0, 5)'
   console.log(press_reviews[0].data.content_type.substr(0, 5))
   console.log(press_reviews)

   function getPaths(press_category) {
      const path = press_category.map(result => 
         result.data.content_type.substr(0, 5)
         );
      return path[0];
   }
   // console.log(getPaths(press_features))
   
   return (
      <div className={styles.container}>
         <h1>&larr;
            <Link href="/"><a>Home</a></Link>
         </h1>
         <h1>reviews</h1>
          <ul>
             {press_reviews.map((result) => (
                 <li key={result.uid}>
                    {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}&nbsp;
                    <Link href={`${getPaths(press_reviews)}/[id]`} as={`${getPaths(press_reviews)}/${result.uid}`}>
                       <a>
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
               <li key={result.uid}>
                  {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}&nbsp;
                  <Link href={`${getPaths(press_interviews)}/[id]`} as={`${getPaths(press_interviews)}/${result.uid}`}>
                     <a>
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
               <li key={result.uid}>
                  {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}&nbsp;
                  <Link href={`${getPaths(press_releases)}/[id]`} as={`${getPaths(press_releases)}/${result.uid}`}>
                     <a>
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
               <li key={result.uid}>
                  {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}&nbsp;
                  <Link href={`${getPaths(press_features)}/[id]`} as={`${getPaths(press_features)}/${result.uid}`}>
                     <a>
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

