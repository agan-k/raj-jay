import React, {useState} from 'react'
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"

import style from './blog.module.css'
// import formatPrismicDate from '../formatPrismicDate.js'
import Modal from '../../components/modal'
import Layout from '../../components/layout'

export default function Blog(props) {
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
   
   function formatPrismicDate(date) {
      let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
      let day;
      let month;
      let year = date.slice(0, 4);
      
      if (date.charAt(8) == '0') {
         day = date.slice(9, 10);
      }
      else {
         day = date.slice(8, 10);
      }
      if (date.charAt(5) == '0') {
         month = months[date.slice(6, 7) - 1];
      }
      else {
         month = months[date.slice(5, 7) -1]
      }
      return month + ' ' + day + ', ' + ' ' + year;
   }
   
   const blog = props.content.results.filter(result =>
      result.data.content_type == 'blog'
   )
   // console.log(blog[0].data.video_link.text)
   console.log(blog)
   
   const last_post = blog.map(post =>
      post.data.video_link.length !== 0 ?
         <div className={style.last_post}
            key={post.id} onClick={() => setVideoURL(post.data.video_link[0].text)}>
            
            <div className={style.last_post_date}>
               <p>
                  {formatPrismicDate(post.data.date)}
               </p>
            </div>

            <img className={style.video_thumb} src={post.data.img.url} onClick={() => setShowModal(true)} />
            {RichText.render(post.data.content_body)}
         </div>
         
         :

         <div className={style.last_post} key={post.id}>
            <div className={style.last_post_date}>
               <p>
                  {formatPrismicDate(post.data.date)}
               </p>
            </div>
            <img className={style.title_image} src={post.data.img.url} />
            {RichText.render(post.data.content_body)}
         </div>
   )
   
   const old_posts_links = blog.map(post => 
      <div className={style.old_post_link_container} key={post.id}>
         <div className={style.old_post_date}>
            <p>
               {formatPrismicDate(post.data.date)}
            </p>
         </div>
         <div className={style.old_post_link}>
            <Link href="blog/[id]" as={`/blog/${post.uid}`}>
               <a>
                  {RichText.render(post.data.content_body.filter(item => item.type == 'heading3'))}<br />
                  {RichText.render(post.data.content_body.filter(item => item.type == 'heading4'))}
               </a>
            </Link>
         </div>
      </div>
   )
      
   old_posts_links.shift()

   return (
      <Layout>
         <div className={showModal ? style['container_blur'] : style['container']}>
            <div className={style.posts_container}>
               <div className={style.last_post_container}>
                  {last_post.shift()}
               </div>
               <div className={style.old_posts_container}>
                  <h4>old posts:</h4>
                  {old_posts_links}
               </div>
            </div>
         </div>
         {showModal && (
            <Modal
               blog_video_url={videoURL}
               closeModal={() => setShowModal(false)}
            />
         )}
      </Layout>
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
   };
}