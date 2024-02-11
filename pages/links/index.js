import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import {Layout, Text} from '../../components';
import LinkCard from './components/LinkCard';
import { Container, Card } from './styled';

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
         <Text padding={'0 0 0 32px'} letterSpacing={2}>musicians:</Text>
         <Container>
            {musicians}
         </Container>
         <Text padding={'0 0 0 32px'} letterSpacing={2}>visual artists:</Text>
         <Container>
            {visualArtists}
         </Container>
         <Text padding={'0 0 0 32px'} letterSpacing={2}>other:</Text>
         <Container>
            {other}
         </Container>
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
