import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration"
import { GetStaticProps } from "next";

import {Layout, Banner} from '../../components';
import { BANNER_QUOTE } from "../../utils/constants";
import {ArticleList, Article} from "./components";
import {Container} from './styled';

interface PressProps {
   content: any
}

export const Press: React.FC<PressProps> = ({content}) => {
   const pressReviews = content.results.filter(result => 
      result.data.content_type == 'press-reviews'
   );
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 

   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.press]} $imagePath={'images/banner5.png'} />
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
};
export default Press;

export const getStaticProps = (async () => {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   );
   return {
      props: {
         content
      },
   };
}) satisfies GetStaticProps

