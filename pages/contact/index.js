import Link from 'next/link'
import { client } from '../../prismic-configuration'

import {Box, FlexBox, Layout, Text} from '../../components'
import {ContactForm} from './components';
import { Container } from './styled';


export default function Contact({contact}) {

   const publicity = contact.map(publicist => 
      publicist.text.split(",")
   );
   const publicityCard = publicity.map(publicist =>
      <FlexBox width={'40%'} justifyContent={'start'}>
         <Text whiteSpace={'nowrap'}>{publicist[0]}:&nbsp;</Text>
         <Link href={publicist[2]}>
            <Text whiteSpace={'nowrap'} color={'grey'}>{publicist[1]}&nbsp;&rarr;</Text>
         </Link>
      </FlexBox>
   );
   
   return (
      <Layout>
         <FlexBox justifyContent={'center'}>
            <FlexBox width={'60%'} justifyContent={'space-between'}>
               {publicityCard}
            </FlexBox>
         </FlexBox>
         <FlexBox justifyContent={'center'}>
            <Box width={'60%'} marginTop={70}>
               <Text padding={'0 0 1rem 0'} fontStyle={'italic'} color={'grey'}>
                  Write to Raj:
               </Text>
               <ContactForm />
            </Box>
         </FlexBox>
      </Layout>
   )
}

export async function getStaticProps() {
   const contact = await client.getSingle("contact")
   return {
      props: {
         contact: contact.data.contact_body
      }
   }
}
