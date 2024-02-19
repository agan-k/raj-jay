import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import {Layout, Text, FlexBox, Box, BlockTitle} from '../../components';
import LinkCard from './components/LinkCard';

export default function Links({linksData}) {
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
         <Box width={'90%'}>
         <BlockTitle margin={'32px 0 0'}>musicians:</BlockTitle>
            <FlexBox>
               {musicians}
            </FlexBox>
            <BlockTitle margin={'32px 0 0'}>visual artists:</BlockTitle>
            <FlexBox>
               {visualArtists}
            </FlexBox>
            <BlockTitle margin={'32px 0 0'}>other:</BlockTitle>
            <FlexBox>
               {other}
            </FlexBox>
         </Box>
      </Layout>
   )
}

export async function getStaticProps() {
   const linksData = await client.query(Prismic.Predicates.at("document.type", "link"),
      {
         orderings: '[my.link.date]',
         pageSize: 100
      }
   );
   return {
      props: {
         linksData: linksData.results
      }
   }
}
