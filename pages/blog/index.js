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
      const last_post = blog.map(post =>
         post.data.video_link.length !== 0 ?
            <div className={styles.last_post_container}
               key={post.id} onClick={() => this.handleVideo(post.data.video_link[0].text)}>
                  <h3>{formatDate(post.data.date)}</h3>
                  <img src={post.data.img.url} />
                  {RichText.render(post.data.content_body)}
            </div> :
            <div className={styles.last_post_container} key={post.id}>
               <h3>{formatDate(post.data.date)}</h3>
               <img src={post.data.img.url} />
               {RichText.render(post.data.content_body)}
            </div>
         )
      const posts = blog.map(post => 
            <div className={styles.post_container} key={post.id}>
               <h3>{formatDate(post.data.date)}</h3>
               <div className={styles.post_link}>
                  <Link href="blog/[id]" as={`blog/${post.uid}`}>
                     <a>
                        {RichText.render(post.data.content_body.filter(item => item.type == 'heading3'))}<span>,</span>&nbsp;
                        {RichText.render(post.data.content_body.filter(item => item.type == 'heading4'))}
                     </a>
                  </Link>
               </div>
            </div>
         )
      
      const old_posts = posts.shift()

      return (
         <div className={styles.container}>
            <h1>&larr;
               <Link href="/"><a>Home</a></Link>
            </h1>
            <h1>BlogPosts</h1>
            <div className={styles.posts}>
               {last_post[0]}
               <hr style={{color: 'grey' }}/>
               {posts}
            </div>
            {this.state.showModal && (
               <Modal
                  blog_video_url={this.state.video_url}
                  closeModal={this.closeModal}
               />
            )}
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
