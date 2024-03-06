import { GetStaticProps } from 'next';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import {Layout, Box, BlockTitle, Banner} from '../../components';
import { BANNER_QUOTE } from '../../utils/constants';
import {LinkCard} from './components/LinkCard';
import { Container } from './components/styled';

interface LinkProps {
   linksData: any
   content: any
}

export const Links: React.FC<LinkProps> = ({linksData, content}) => {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 

   const links = linksData.map(link => link.data);
   const musicianLinks = links.filter(link => link.category === 'musicians');
   const visualArtistsLinks = links.filter(link => link.category === 'visual artists');
   const otherLinks = links.filter(link => link.category === 'other');

   const musicians = musicianLinks.map(item =>
      <LinkCard key={item.name} link={item} />
   );
   const visualArtists = visualArtistsLinks.map(item =>
      <LinkCard key={item.name} link={item} />
   );
   const other = otherLinks.map(item =>
      <LinkCard key={item.name} link={item} />
   );
   
   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.links]} $imagePath={'images/banner4.png'} />
         <Box>
            <BlockTitle $margin={'0 0 32px'}>musicians:</BlockTitle>
            <Container>
               {musicians}
            </Container>
            <BlockTitle $margin={'32px 0'}>visual artists:</BlockTitle>
            <Container>
               {visualArtists}
            </Container>
            <BlockTitle $margin={'32px 0'}>other:</BlockTitle>
            <Container>
               {other}
            </Container>
         </Box>
      </Layout>
   )
};
export default Links;

export const getStaticProps = (async () => {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   );
   const linksData = await client.query(Prismic.Predicates.at("document.type", "link"),
      {
         orderings: '[my.link.date]',
         pageSize: 100
      }
   );
   return {
      props: {
         content,
         linksData: linksData.results
      }
   }
}) satisfies GetStaticProps;
