import React from 'react'
import Link from 'next/link'

import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'

import style from './contact.module.css'

export default function Contact(props) {
   console.log(props)
   return (
      <div className={style.container}>
         <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
         <h1>Contact</h1>
         <div className={style.contact_container}>
            {RichText.render(props.contact.data.contact_body)}
         </div>
      </div>
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
