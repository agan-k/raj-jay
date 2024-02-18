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
   // ---> Reviews
   const pressReviews = content.results.filter(result => 
      result.data.content_type == 'press-reviews'
      );

   return (
      <Layout>
         <Container>
            {/* TODO this is isMobile && expandable quotes 
            container. Top of the page */}
            <div className={style.quoteS_container_mobile} >
               <div className={style['quotes_toggle']} onClick={() => setQuotesShow(!quotesShow)}>
               <h4>quotes</h4>
                  <div className={!quotesShow ? style['open_icon'] : style['close_icon']}>
                  </div>
               </div>
            {/*  */}
            
               {/* <div className={quotesShow ? style['quoteS_open'] : style['quoteS']}>
                  <QuoteList content={content} />
               </div> */}
            </div>
            <section>
               <Article currentArticle={pressReviews[0].data} />
               {/* 
               <img src={pressReviews[0].data.img.url} style={{maxHeight: '3rem'}}/>
               {RichText.render(pressReviews[0].data.content_body)}
               */}
            </section>
            <aside>
               <ArticleList content={content} />
               {/* <QuoteList content={content} /> */}
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

