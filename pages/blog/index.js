import React from 'react'
import Head from 'next/head'
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import getContentPaths from '../contentPaths'
import styles from './blog.module.css'
import formatDate from '../formatDate.js'
import Modal from '../../components/modal'

export default class Blog extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         showModal: false
      }
   }
   handleVideo = (video_url) => {
      this.setState({
         showModal: !this.state.showModal,
         video_url: video_url
      })
   }
   closeModal = () => {
      this.setState({
         showModal: false
      })
   }
   
   
   render() {
      
      const blog = this.props.content.results.filter(result =>
         result.data.content_type == 'blog'
      )
      const posts = blog.map(post => 
         post.data.video_link.length !== 0 ?
            <div className={styles.post_container}
               key={post.id} onClick={() => this.handleVideo(post.data)}>
                  <h3>{formatDate(post.data.date)}</h3>
                  <img src={post.data.img.url} />
                  {RichText.render(post.data.content_body)}
            </div> :
            <div className={styles.post_container} key={post.id}>
               <h3>{formatDate(post.data.date)}</h3>
               <img src={post.data.img.url} />
               {RichText.render(post.data.content_body)}
            </div>
         )
      console.log(blog[0].data.video_link)
      console.log()
      return (
         <div className={styles.container}>
            <h1>&larr;
               <Link href="/"><a>Home</a></Link>
            </h1>
            <h1>BlogPosts</h1>
            <div className={styles.posts}>
               {posts}
            </div>
            {this.state.showModal && (
               <Modal
                  blog_video={this.state.video_url}
                  closeModal={this.closeModal}
               />
            )}

            {/* {blog.map(result =>
               <div className={styles.post_container}> */}
                  {/* <li key={result.uid}> */}
                  {/* <Link href="blog/[id]" as={`${getContentPaths(blog)}/${result.uid}`}> */}
                  {/* <a> */}
                  {/* <h3>{formatDate(result.data.date)}</h3>
                  <img src={result.data.img.url} />
                  {RichText.render(result.data.content_body)} */}
   
                  {/* </a> */}
                  {/* </Link> */}
                  {/* </li> */}
               {/* </div> */}
            {/* )} */}
         </div>
      )
   }
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize : 100
      }
   );
   return {
      props: {
         content
      }
   };
}
