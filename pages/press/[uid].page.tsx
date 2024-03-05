import React from "react"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration";
import { GetStaticProps, GetStaticPaths } from 'next';

import {Layout, Banner, Anchor, FlexBox, Box} from "../../components";
import { BANNER_QUOTE } from "../../utils/constants";
import {ArticleList, Article} from "./components";
import { UidContainer } from "./styled";

interface UidProps {
   data: any
   content: any
   id: any
}

export const Uid: React.FC<UidProps> = ({ 
   data, 
   content, 
   id }) => {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 
   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.press]} />
         <UidContainer>
            <FlexBox $justifyContent='end' $gap='16px'>
               <Anchor path={`/press#${id}`}>press</Anchor>
               <Anchor path={`/#${id}`}>news</Anchor>
            </FlexBox>
            <section>
               <Article currentArticle={data} />
            </section>
            <Box $margin='32px 0 62px'>
               <FlexBox $justifyContent='end' $gap='16px'>
                  <Anchor path={`/press#${id}`}>press</Anchor>
                  <Anchor path={`/#${id}`}>news</Anchor>
               </FlexBox>
            </Box>
            <aside>
               <ArticleList content={content} />
            </aside>
         </UidContainer>
      </Layout>
   );
 };
 export default Uid;

 export const getStaticProps = (async ({ params }) => {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   )
    // @ts-expect-error
   const single = await client.getByUID("content", params.uid);
   return {
      props: {
         content,
         data: single.data,
         id: single.id
      }
   }
}) satisfies GetStaticProps;

export const getStaticPaths = (async () => {
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
}) satisfies GetStaticPaths;