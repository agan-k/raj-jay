import React from "react"
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import {Layout, Banner} from "../../components";
import { BANNER_QUOTE } from "../../utils/constants";
import {ArticleList, Article} from "./components";
import { Container } from "./styled";

export default function Uid({ data, content }) {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 
   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.press]} imagePath={'/images/banner5.png'} />
         <Container>
            <section>
               <Article currentArticle={data} />
            </section>
            <aside>
               <ArticleList content={content} />
            </aside>
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