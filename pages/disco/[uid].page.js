import Link from 'next/link'

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"

import {Layout} from '../../components';
import { Album, AlbumList } from './components';
import {Container} from './styled';

export default function Uid({ data, content }) {
   const discography = content.results.filter(result =>
      result.data.content_type == 'discography'
   );

   return (
      <Layout>
         <Container>
            <section>
               <Album currentAlbum={data}/>
            </section>
            <aside>
               <AlbumList discography={discography}/>
            </aside>
         </Container>
      </Layout>
   )
}

export async function getStaticProps({ params }) {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   )
   const { uid } = params;
   const { data } = await client.getByUID("content", uid);
   return {
      props: {
         data, content
      }
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
