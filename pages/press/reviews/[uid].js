import { client } from "../../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import React from 'react'

export default function Review({ data }) {
   console.log(data);
   return (
     
     <React.Fragment>
       <article>
            <img src={data.logo.url} style={{maxHeight: '4rem'}}/>
         <main>{RichText.render(data.press_body)}</main>
       </article>
     </React.Fragment>
   );
 }

export async function getStaticProps({ params }) {
   const { uid } = params;
   const { data } = await client.getByUID("press", uid);
   return {
     props: { data },
   };
 }

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "press")
  )

  const paths = results.map(press => ({
    params: {
      uid: press.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}