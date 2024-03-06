import Prismic from 'prismic-javascript';
import { client } from "../../prismic-configuration";
import { GetStaticProps } from 'next';
import { RichText } from "prismic-reactjs"

import { Layout, Banner } from '../../components';
import { BANNER_QUOTE } from '../../utils/constants';
import { Container } from './styled';

interface BioProps {
   bio: any
   content: any
}

export const Bio: React.FC<BioProps> = ({bio, content}) => {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0);

   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.bio]} />
         <Container>
            {RichText.render(bio.data.bio_body)}
         </Container>
      </Layout>
   )
};
export default Bio;

export const getStaticProps = (async () => {
   // @ts-expect-error
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
}) satisfies GetStaticProps;
