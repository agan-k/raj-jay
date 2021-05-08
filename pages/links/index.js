import React from 'react'

import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'

import Layout from '../../components/layout'
import style from './links.module.css'

export default function Links(props) {
 
   const links = props.links.data.links_body.map(link =>
      link.text.split(','));
   const formatted_links = links.map(link =>
      <>
         {/* {link[2] && ( */}
            <div className={style.link_container}>
               <a href={link[2]} target="_blank">
                  <strong><span>{link[0]}</span></strong><br/>
                  <em><span>{link[1]}</span></em>
               </a>
            </div>
         {/* )} */}
      </>
      )
   return (
      <Layout>
         <div className={style.container}>
            <div className={style.links_wrapper}>
               {formatted_links}
            </div>
         </div>
      </Layout>
   )
}
export async function getStaticProps() {
   const links = await client.getSingle("links")
   return {
      props: {
         links
      }
   }
}
