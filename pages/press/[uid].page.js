import React from "react"
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import {Layout, Banner, Anchor, BlockTitle} from "../../components";
import { BANNER_QUOTE } from "../../utils/constants";
import {ArticleList, Article} from "./components";
import { UidContainer, Back } from "./styled";

export default function Uid({ data, content, id }) {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 
   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.press]} $imagePath={'/images/banner5.png'} />
         <UidContainer>
            <Back $margin={'64px 0 0'}>
               <Anchor path={'/press'}>press</Anchor>
            </Back>
            <Back $margin={'16px 0 0'}>
               <Anchor path={`/#${id}`}>news</Anchor>
            </Back>
            <section>
               <Article currentArticle={data} />
            </section>
            <Back>
               <Anchor path={'/press'}>press</Anchor>
            </Back>
            <Back $margin={'16px 0 64px'}>
               <Anchor path={`/#${id}`}>news</Anchor>
            </Back>
            <aside>
               <ArticleList content={content} />
            </aside>
         </UidContainer>
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
   const { id } = await client.getByUID("content", uid);
   return {
      props: { data, content, id }
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