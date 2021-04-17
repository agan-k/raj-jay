import React from 'react'

import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'

import style from './contact.module.css'
import Layout from '../../components/layout'

export default function Contact(props) {
   
   return (
      <Layout>
         <div className={style.container}>
            <div className={style.contact_container}>
               {RichText.render(props.contact.data.contact_body)}
            </div>
            <form name="contact" method="POST" data-netlify="true">
               <p>
                  <label>Your Name: <input type="text" name="name" /></label>   
               </p>
               <p>
                  <label>Your Email: <input type="email" name="email" /></label>
               </p>
               <p>
                  <label>Your Role: <select name="role[]" multiple>
                     <option value="leader">Leader</option>
                     <option value="follower">Follower</option>
                  </select></label>
               </p>
               <p>
                  <label>Message: <textarea name="message"></textarea></label>
               </p>
               <p>
                  <button type="submit">Send</button>
               </p>
            </form>
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
