import React from 'react'
import Link from 'net/link'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import RichText from 'prismic-reactjs'

import style from './shows.module.css'
import formatDate from '../formatDate'

import React from 'react'

export default function Shows(props) {
   const calendar = props.content.results.filter(result =>
      result.data.content_type == 'show'
      )
      const shows = calendar.map(show =>
         <div className={style.show_container}>
            <h2>{formatDate(show.data.date) }</h2>
            {RichText.render(show.data.content_body)}
         </div>
         
         )
         const sh
         return (
            <div className={style.container}>
            <div className={style.calendar_container}></div>
      </div>
   )
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize: 100
      }
   );
   return {
      props: {
         content
      }
   }
}
