import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import {Layout, Text, FlexBox, Box} from '../../components';
import LinkCard from './components/LinkCard';
import { Container } from './styled';

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
         <Text letterSpacing={2} margin={'32px 0 0'}>musicians:</Text>
            <FlexBox>
               {musicians}
            </FlexBox>
            <Text letterSpacing={2} margin={'32px 0 0'}>visual artists:</Text>
            <FlexBox>
               {visualArtists}
            </FlexBox>
            <Text letterSpacing={2} margin={'32px 0 0'}>other:</Text>
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
