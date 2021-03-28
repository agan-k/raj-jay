import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

export default class Photos extends Component {
   constructor(props) {
      console.log(props)
      super()
      this.state = {
         showModal: false
      }
   }
   render() {
      const photos = this.props.content.results.map(result =>
         <img src={result.data.img.url}/>
         )
      return (
         <div>
            <h1>photos</h1>
         </div>
      )
   }
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content")
   )
   return {
      props: {
         content
      }
   }
}

