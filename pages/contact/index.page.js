import { client } from '../../prismic-configuration'
import Prismic from "prismic-javascript";
import {Box, FlexBox, Layout, Text, Banner, BlockTitle} from '../../components';
import { BANNER_QUOTE } from '../../utils/constants';
import {ContactForm, Publicist} from './components';


export default function Contact({contact, content, publicity}) {
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0);
   console.log(publicity)
   const publicityCard = publicity.map(publicist =>
      <Publicist publicist={publicist.data} />
   );
   
   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.contact]} imagePath={'images/banner6.png'} />
            <BlockTitle>publicity:</BlockTitle>
         <FlexBox justifyContent={'center'}>
            <FlexBox width={'60%'} justifyContent={'space-between'}>
               {publicityCard}
            </FlexBox>
         </FlexBox>
         <BlockTitle>
            <FlexBox>
               write to&nbsp;
               <Text textTransform={'capitalize'}>raj:</Text>
            </FlexBox>
         </BlockTitle>
         <FlexBox justifyContent={'center'}>
            <Box width={'60%'}>
               <ContactForm />
            </Box>
         </FlexBox>
      </Layout>
   )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   );
   const publicity = await client.query(
      Prismic.Predicates.at("document.type", "publicist"),
      { pageSize: 10 }
   );
   const contact = await client.getSingle("contact")
   return {
      props: {
         content,
         publicity: publicity.results,
         contact: contact.data.contact_body
      }
   }
}
