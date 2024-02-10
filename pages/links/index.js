import { Fragment } from 'react';
import Link from 'next/link';
import { client } from '../../prismic-configuration';
import {Layout, Text} from '../../components';
import { Container, LinkCard } from './styled';

export default function Links({linksData}) {
   const links = linksData.map(link =>
      link.text.split(',')
   );

   const linkCards = links.map(link =>
      <Fragment key={link[0]}>
         {link[2] && (
            <LinkCard>
               <Link href={link[2]} target="_blank">
                  <Text 
                     fontWeight={500}
                  >{link[0]}</Text>
                  <Text 
                     fontWeight={100}
                     fontStyle={'italic'}
                  >{link[1]}</Text>
               </Link>
            </LinkCard>
         )}
      </Fragment>
      )
   return (
      <Layout>
         <Container>
            {linkCards}
         </Container>
      </Layout>
   )
}
export async function getStaticProps() {
   const links = await client.getSingle("links")
   return {
      props: {
         linksData: links.data.links_body
      }
   }
}
