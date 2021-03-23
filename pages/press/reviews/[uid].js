import { client } from "../../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import React from 'react'

export default function Review({ data }) {
   console.log(data);
   return (
     
     <React.Fragment>
       <article>
         <header>{RichText.asText(data.title)}</header>
         <main>{RichText.asText(data.review_body)}</main>
       </article>
     </React.Fragment>
   );
 }

export async function getStaticProps({ params }) {
   const { uid } = params;
   const { data } = await client.getByUID("review", uid);
   return {
     props: { data },
   };
 }

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "review")
  )

  const paths = results.map(review => ({
    params: {
      uid: review.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}