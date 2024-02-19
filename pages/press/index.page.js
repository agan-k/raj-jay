import  React, { useState }  from 'react';
import Prismic from "prismic-javascript";
import { RichText } from 'prismic-reactjs';
import { client } from "../../prismic-configuration"

import {Layout} from '../../components';
import {QuoteList, ArticleList, Article} from "./components";
import {Container} from './styled';

import style from './press.module.css'

export default function Press({content}) {
   const [quotesShow, setQuotesShow] = useState(false);
   const pressReviews = content.results.filter(result => 
      result.data.content_type == 'press-reviews'
   );

   return (
      <Layout>
         <Container>
            <section>
               <Article currentArticle={pressReviews[0].data} />
            </section>
            <aside>
               <ArticleList content={content} />
            </aside>
         </Container>
      </Layout>
   )
}
export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   );
   return {
      props: {
         content
      },
   };
}

