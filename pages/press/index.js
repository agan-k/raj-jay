import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { React } from 'react'
import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function reviews(props) {
   console.log(props.content)
   // console.log(props.press.results[0].data.press_body[0].text)
   // console.log(props.press.results.map(result => 
   //    result.data.press_body[0].text))
   // console.log(props.press.results[0].data.article_title[0].text)
   
   return (
      <div>
         <h1>&larr;
            <Link href="/">
               <a>
               Home
               </a>
            </Link>
         </h1>
         <h1>reviews</h1>
         <ul>
        {props.content.results.map((result) => (
           <li key={result.uid}>
              <Link href="press/reviews/[id]" as={`press/reviews/${result.uid}`}>
                 <a>
                    {/* {RichText.render(result.data.publication)} */}
                    {RichText.render(result.data.content_body.filter(item => item.type == 'heading3'))}
                    {RichText.render(result.data.content_body.filter(item => item.type == 'heading4'))}
                    {/* {RichText.render(result.data.article_title)} */}
                 </a>
              </Link>
          </li>
        ))}
      </ul>
        <hr/>
        <h1>interviews</h1>
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

