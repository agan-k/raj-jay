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
   
   const blog_posts = props.blog.results.map(result => result
   )
   console.log(blog_posts)
   
   const last_post = blog_posts.map(post =>
      post.data.video_url.length !== 0 ?
         <div className={style.last_post}
            key={post.id} onClick={() => setVideoURL(post.data.video_url[0].text)}>
            
            <div className={style.last_post_date}>
               <p>
                  {formatPrismicDate(post.data.date)}
               </p>
            </div>

            <img className={style.video_thumb} src={post.data.title_image.url} onClick={() => setShowModal(true)} />
            {RichText.render(post.data.post_body)}
         </div> :
         <div className={style.last_post} key={post.id}>
            <h3>{formatPrismicDate(post.data.date)}</h3>
            <img src={post.data.title_image.url} />
            {RichText.render(post.data.post_body)}
         </div>
   )
   
   const old_posts_links = blog_posts.map(post => 
      <div className={style.old_post_link_container} key={post.id}>
         <div className={style.old_post_date}>
            <p>
               {formatPrismicDate(post.data.date)}
            </p>
         </div>
         <div className={style.old_post_link}>
            <Link href="blog/[id]" as={`/blog/${post.uid}`}>
               <a>
                  {RichText.render(post.data.post_body.filter(item => item.type == 'heading3'))}<br />
                  {RichText.render(post.data.post_body.filter(item => item.type == 'heading4'))}
               </a>
            </Link>
         </div>
      </div>
   )
      
   old_posts_links.shift()

   return (
      <Layout>
         <div className={showModal ? style['container_blur'] : style['container']}>
         <h2>Blog</h2>
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
   const blog = await client.query(
      Prismic.Predicates.at("document.type", "blog_post"),
      {
         orderings: '[my.blog_post.date desc]',
         pageSize: 100
      }
   );
   return {
      props: {
         blog
      }
   };
}