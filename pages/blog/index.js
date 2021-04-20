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
   const last_post = blog.map(post =>
      post.data.video_link.length !== 0 ?
         <div className={style.last_post_container}
            key={post.id} onClick={() => setVideoURL(post.data.video_link[0].text)}>
            <h3>{formatPrismicDate(post.data.date)}</h3>
            <img src={post.data.img.url} onClick={() => setShowModal(true)} />
               {RichText.render(post.data.content_body)}
         </div> :
         <div className={style.last_post_container} key={post.id}>
            <h3>{formatPrismicDate(post.data.date)}</h3>
            <img src={post.data.img.url} />
            {RichText.render(post.data.content_body)}
         </div>
         )
   const posts = blog.map(post => 
      <div className={style.post_container} key={post.id}>
         <div className={style.post_date}>
            <p>
               {formatPrismicDate(post.data.date)}
            </p>
         </div>
         <div className={style.post_link}>
            <Link href="blog/[id]" as={`/blog/${post.uid}`}>
               <a>
                  {RichText.render(post.data.content_body.filter(item => item.type == 'heading3'))}<br />
                  {RichText.render(post.data.content_body.filter(item => item.type == 'heading4'))}
               </a>
            </Link>
         </div>
      </div>
   )
      
   posts.shift()

   return (
      <Layout>
         <div className={showModal ? style['container_blur'] : style['container']}>
            <div className={style.posts}>
               <div className={style.current_post}>
                  {last_post[0]}
               </div>
               <div className={style.old_posts}>
                  {posts}
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