import React, {useState} from 'react'
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs";
import {Layout} from "../../components";
import formatPrismicDate from '../../utils/formatPrismicDate';

import Modal from '../../components';
import {PostsLinks} from "./components";
import { Container, Post, PostsList, PostLink, Date } from './styled';

export default function Blog(props) {
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
   
   const blog = props.content.results.filter(result =>
      result.data.content_type == 'blog'
   );
   
   const posts = blog.map(post =>
      post.data.video_link.length !== 0 ?
         <Post
            key={post.id} 
            onClick={() => setVideoURL(post.data.video_link[0].text)}
         >
            <Date>{formatPrismicDate(post.data.date)}</Date>
            <img src={post.data.img.url} onClick={() => setShowModal(true)} />
            {RichText.render(post.data.content_body)}
         </Post>
         
         :

         <Post key={post.id}>
            <Date>{formatPrismicDate(post.data.date)}</Date>
            <img src={post.data.img.url} />
            {RichText.render(post.data.content_body)}
         </Post>
   );

   return (
      <Layout>
         <Container blur={showModal ? true : false}>
            {posts[0]}
            <PostsLinks blog={blog} />
         </Container>
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