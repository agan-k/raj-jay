import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import styles from './discography.module.css'
import Link from 'next/link'
import BandcampPlayer from 'react-bandcamp'



export default class Discography extends Component {
   constructor(props) {
      super(props)
      this.state = {
         disc_detail: null
      }
   }
   render() {
      return (
         <div className={styles.container}>
            <h1>&larr;<Link href="/"><a>Home</a></Link></h1>
            <h1>Disco</h1>
         </div>
      )
   }
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize: 100 }
   )
   return {
      props: {
         content
      }
   }
}
