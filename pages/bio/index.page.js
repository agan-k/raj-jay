import React from 'react'

import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import { Layout } from '../../components';
import { Container } from './styled';

export default function Bio(props) {
   
   return (
      <Layout>
         <Container>
            {RichText.render(props.bio.data.bio_body)}
         </Container>
      </Layout>
   )
}
export async function getStaticProps() {
   const bio = await client.getSingle("bio")
   return {
      props: {
         bio
      }
   }
}
