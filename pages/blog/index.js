import React, {useState} from 'react'
import Link from "next/link"

import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"
import {Layout, Modal} from "../../components";
import HandleVideoLinkModal from '../../utils/handleVideoLinkModal';

import {Post} from "./components";
import {Container} from './styled';

export default function Blog(props) {
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
   const blog = props.content.results.filter(result =>
      result.data.content_type == 'blog'
   );
   
   const posts = blog.map(post =>
      <Post
         key={post.id} 
         data={post.data}
         setShowModal={setShowModal}
         setVideoURL={setVideoURL}
      />
   );

   return (
      <Layout>
         <Container blur={showModal ? true : false}>
            {posts}
         </Container>
         {showModal && (
            <Modal
               video={videoURL}
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