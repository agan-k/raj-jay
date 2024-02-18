import React from 'react'
import Link from 'next/link'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

import {Layout} from "../../components";
import {Container} from './styled';
import { AlbumList, Album } from './components';
import { FEATURED_ALBUM } from '../../utils/constants';


export default function Discography({content}) {
   const discography = content.results.filter(result =>
      result.data.content_type == 'discography'
   );
   const featuredAlbum = discography.filter(result =>
      result.data.content_body[1].text === FEATURED_ALBUM
   );

   return (
      <Layout>
         <Container>
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
