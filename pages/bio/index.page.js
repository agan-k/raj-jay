import Prismic from 'prismic-javascript';
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import { Layout, Banner } from '../../components';
import { BANNER_QUOTE } from '../../utils/constants';
import { Container } from './styled';

export default function Bio({bio, content}) {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0);

   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.bio]} $imagePath={'images/banner3.png'}/>
         <Container>
            {RichText.render(bio.data.bio_body)}
         </Container>
      </Layout>
   )
}
export async function getStaticProps() {
   const bio = await client.getSingle("bio");
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   );
   return {
      props: {
         bio, 
         content,
      }
   }
}
