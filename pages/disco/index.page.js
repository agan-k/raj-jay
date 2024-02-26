import React from 'react'
import Link from 'next/link'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

import {Layout, Banner} from "../../components";
import {Container} from './styled';
import { AlbumList, Album } from './components';
import { FEATURED_ALBUM, BANNER_QUOTE } from '../../utils/constants';


export default function Discography({content}) {
   const discography = content.results.filter(result =>
      result.data.content_type == 'discography'
   );
   const featuredAlbum = discography.filter(result =>
      result.data.content_body[1].text === FEATURED_ALBUM
   );
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 
   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.disco]} $imagePath={'/images/banner6.png'} />
         <Container id="discography">
            <section>
               <Album currentAlbum={featuredAlbum[0].data}/>
            </section>
            <aside>
               <AlbumList discography={discography} />
            </aside>
         </Container>
      </Layout>
   )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   )
   return {
      props: {
         content
      }
   }
}
