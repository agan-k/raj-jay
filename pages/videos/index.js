import React, { Component } from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import { RichText } from "prismic-reactjs"

import style from './videos.module.css'
import Modal from '../../components/modal'

export default class Videos extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showModal: false
      }
   }
   handleShowModal = (index) => {
      this.setState({
         showModal: !this.state.showModal,
         index: index
      })
   }

   handleCloseModal = () => {
      this.setState({
         showModal: !this.state.showModal,
         index: null
      })
   }

   render() {
      const videos = this.props.content.results.filter(result =>
         result.data.content_type == 'video'
      )
      console.log(videos)
      const gallery = videos.map((video, index) =>
         <div className={style.video_container} key={video.uid}>
            <img onClick={() => this.handleShowModal(index)} src={video.data.img.url} />
            {RichText.render(video.data.video_caption)}
         </div>
      )
      console.log(this.props)
      return (
         <div>
            <h1>&larr;
               <Link href="/"><a>Home</a></Link>
            </h1>
            <h1>videos</h1>
            <div className={style.gallery_container}>
               {gallery}
            </div>

            {this.state.showModal && (
               <Modal
                  videos={videos}
                  index={this.state.index}
                  closeModal={this.handleCloseModal}

               />
            )}
         </div>
      )
   }
}
export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize : 100 }
      )
      return {
         props: {
            content
         }
      }
}
