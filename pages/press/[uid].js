import React from "react"
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import {Layout} from "../../components";
import {ArticleList} from "./components";
import { Container } from "./styled";

export default function Article({ data, content }) {
   return (
      <Layout>
         <Container>
            <section>
               <img src={data.img.url} style={{maxHeight: '3rem'}}/>
               {RichText.render(data.content_body)}
            </section>
            <ArticleList content={content} />
         </Container>
      </Layout>
   );
 }

export async function getStaticProps({ params }) {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   );
   const { uid } = params;
   const { data } = await client.getByUID("content", uid);
   return {
      props: { data, content }
   }
 }

export async function getStaticPaths() {
  const { results } = await client.query(
     Prismic.Predicates.at("document.type", "content"),
     { pageSize: 100 }
  )
  const paths = results.map(result => ({
    params: {
      uid: result.uid,
    }
  }))
  return {
    paths,
    fallback: false
  }
}