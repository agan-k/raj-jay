import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { React } from 'react'
import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function reviews(props) {
   console.log(props.press)
   console.log(props.reviews)
   // console.log(props.press.results[0].data.article_title[0].text)
   return (
      <div>
         <h1>reviews</h1>
         <ul>
        {props.press.results.map((press) => (
           <li key={press.uid}>
              <Link href="press/reviews/[id]" as={`press/reviews/${press.uid}`}>
                 <a>
                  {RichText.render(press.data.publication)}
                  {RichText.render(press.data.article_title)}
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
   const reviews = await client.query(
      Prismic.Predicates.at("document.type", "review")
   )
   const press = await client.query(
      Prismic.Predicates.at("document.type", "press")
   )
   return {
      props: {
         reviews,
         press
      },
   }
}

