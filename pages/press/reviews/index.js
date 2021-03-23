// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Prismic from "prismic-javascript"
import { client } from "../../../prismic-configuration"
import { React } from 'react'
import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function reviews(props) {
   console.log(props)
   return (
      <div>
         <h1>reviews</h1>
         <ul>
        {props.reviews.results.map((review) => (
           <li key={review.uid}>
              <Link href="reviews/[id]" as={`reviews/${review.uid}`}>
                 <a>
                  {RichText.render(review.data.title)}
                 </a>
              </Link>
          </li>
        ))}
      </ul>
      </div>
   )
}
export async function getStaticProps() {
   const reviews = await client.query(
      Prismic.Predicates.at("document.type", "review"),
      { orderings: "[my.reviews.date desc]" }
   )
   return {
      props: {
         reviews
      },
   }
}

