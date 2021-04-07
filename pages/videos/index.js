import React, { useState } from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import { RichText } from "prismic-reactjs"

import style from './videos.module.css'
import Modal from '../../components/modal'

export default function Videos(props) {
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
   
   const videos = props.content.results.filter(result =>
      result.data.content_type == 'video'
   )
   console.log(videos[0].data.video_link[0].text)
   const gallery = videos.map((video) =>
      <div className={style.video_container} key={video.uid}
         onClick={() => setVideoURL(video.data.video_link[0].text)}
      >
         <img onClick={() => setShowModal(true)} src={video.data.img.url} />
         {RichText.render(video.data.video_caption)}
      </div>
   )
   return (
      <div>
         <h1>&larr;
            <Link href="/"><a>Home</a></Link>
         </h1>
         <h1>videos</h1>
         <div className={style.gallery_container}>
            {gallery}
         </div>
         {showModal && (
            <Modal
               videos={true}
               video_url={videoURL}
               closeModal={() => setShowModal(false)}
            />
         )}
      </div>
   )
   
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


// import React, { Component } from 'react'
// import Link from 'next/link'
// import Prismic from 'prismic-javascript'
// import { client } from '../../prismic-configuration'
// import { RichText } from "prismic-reactjs"

// import style from './videos.module.css'
// import Modal from '../../components/modal'

// export default class Videos extends Component {
//    constructor(props) {
//       super(props)
//       this.state = {
//          showModal: false
//       }
//    }
//    handleShowModal = (video_url) => {
//       this.setState({
//          showModal: !this.state.showModal,
//          video_url: video_url
//       })
//    }

//    handleCloseModal = () => {
//       this.setState({
//          showModal: !this.state.showModal,
//       })
//    }

//    render() {
//       const videos = this.props.content.results.filter(result =>
//          result.data.content_type == 'video'
//       )
//       console.log(videos[0].data.video_link[0].text)
//       const gallery = videos.map((video) =>
//          <div className={style.video_container} key={video.uid}>
//             <img onClick={() => this.handleShowModal(video.data.video_link[0].text)} src={video.data.img.url} />
//             {RichText.render(video.data.video_caption)}
//          </div>
//       )
//       return (
//          <div>
//             <h1>&larr;
//                <Link href="/"><a>Home</a></Link>
//             </h1>
//             <h1>videos</h1>
//             <div className={style.gallery_container}>
//                {gallery}
//             </div>

//             {this.state.showModal && (
//                <Modal
//                   videos={videos}
//                   video_url={this.state.video_url}
//                   closeModal={this.handleCloseModal}

//                />
//             )}
//          </div>
//       )
//    }
// }
// export async function getStaticProps() {
//    const content = await client.query(
//       Prismic.Predicates.at("document.type", "content"),
//       { pageSize : 100 }
//       )
//       return {
//          props: {
//             content
//          }
//       }
// }
