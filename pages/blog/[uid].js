import React, { useState } from "react"
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import { RichText, Date as PrismicDate } from "prismic-reactjs"

import {Layout, Modal} from "../../components";
// import Modal from "../../components/modal";
import { Date, Post, Container } from "./styled";
import { PostsLinks } from "./components";
import formatPrismicDate from "../../utils/formatPrismicDate"

export default function Uid({ data, content }) {
   const [showModal, setShowModal] = useState(false)
   const blog = content.results.filter(result =>
      result.data.content_type == 'blog'
   );
   const date = PrismicDate(data.date);
   const formattedDate = Intl.DateTimeFormat('en-US', 
   {
      year: 'numeric',
      month: 'short',
      day: '2-digit' 
   }).format(date);

   function HandleVideoLinkModal(videoLink) {
      setVideoURL(videoLink);
      setShowModal(true);
   }

   const post = data.video_link.length !== 0 ?
   <Post>
      <Date>{formatPrismicDate(data.date)}</Date>
      <img src={data.img.url} onClick={() => setShowModal(true)} />
      {RichText.render(data.content_body)}
   </Post> :
   <Post>
      <Date>{formatPrismicDate(data.date)}</Date>
      <img src={data.img.url} />
      {RichText.render(data.content_body)}
   </Post>;

   return (
      <Layout>
         <Container blur={showModal ? true : false}>
            {post}
            <PostsLinks blog={blog} />
         </Container>
         {showModal && (
            <Modal blog_video_url={data.video_link[0].text}
               closeModal={() => setShowModal(false)}
            />
         )}
      </Layout>
   )
}

export async function getStaticProps({ params }) {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {
         orderings: '[my.content.date desc]',
         pageSize: 100
      }
   );
   const { uid } = params;
   const { data } = await client.getByUID("content", uid);
   return {
      props: { data, content },
   };
}

export async function getStaticPaths() {
   const { results } = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      {pageSize : 100}
      )
      const paths = results.map(result => ({
      params: {
         uid: result.uid
      }
   }));

   return {
      paths,
      fallback: false,
   }
}
