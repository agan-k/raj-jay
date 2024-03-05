import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"

import {Layout, Banner, Anchor, FlexBox, Box} from '../../components';
import { BANNER_QUOTE } from '../../utils/constants';
import { Album, AlbumList } from './components';
import {UidContainer, Back} from './styled';
import { QueryOptions } from 'prismic-javascript/types/ResolvedApi';

export default function Uid({ data, content, id }) {
   const albums = content.results.filter(result =>
      result.data.content_type == 'discography'
   );
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 

   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.albums]} />
         <UidContainer>
            <FlexBox $justifyContent='end' $gap='16px'>
               <Anchor path={`/albums#${id}`}>albums</Anchor>
            
               <Anchor path={`/#${id}`}>news</Anchor>
            </FlexBox>
            <section>
               <Album currentAlbum={data}/>
            </section>
            <aside>
               <AlbumList albums={albums}/>
            </aside>
            <Box $margin='32px 0 62px'>
               <FlexBox $justifyContent='end' $gap='16px'>
                  <Anchor path={`/albums#${id}`}>albums</Anchor>
                  <Anchor path={`/#${id}`}>news</Anchor>
               </FlexBox>
            </Box>
         </UidContainer>
      </Layout>
   )
}

type PageParams = {
   uid: string
   options?: any
}

export const getStaticProps = (async ({ params }: GetStaticPropsContext<PageParams>) => {
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
