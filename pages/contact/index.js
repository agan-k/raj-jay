import React from 'react'

import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'

import style from './contact.module.css'
import Layout from '../../components/layout'
import ContactForm from '../../components/contactForm'

export default function Contact(props) {

   const publicity = props.contact.data.contact_body.map(publicist => 
      publicist.text.split(",")
   )
   const formatted_publicity = publicity.map(publicist =>
      <div className={style.publicist}>
         <h4>{publicist[0]}:</h4>
         <p>{publicist[1]}</p>
         <a href={publicist[2]}>&rarr;</a>
      </div>
      )
   console.log(publicity)
   
   return (
      <Layout>
         <div className={style.container}>
            <p>publicist</p>
            <div className={style.publicity}>
               {formatted_publicity}
            </div>
            <p>write direct</p>
         <ContactForm/>
         </div>
      </Layout>
   )
}

export async function getStaticProps() {
   const contact = await client.getSingle("contact")
   return {
      props: {
         contact
      }
   }
}
