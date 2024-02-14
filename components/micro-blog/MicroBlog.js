import React, {useState} from 'react';
import Link from 'next/link';
import {Modal, Text} from "../../components";

import {Post} from "./components/post";
import {Container} from './styled';

export default function MicroBlog({postsData, linkToBlog}) {
   const [showModal, setShowModal] = useState(false)
   const [videoURL, setVideoURL] = useState(null)
   
   const posts = postsData.map(post =>
      <Post
         key={post.id} 
         data={post.data}
         setShowModal={setShowModal}
         setVideoURL={setVideoURL}
      />
   );

   return (
    <>
      <Container blur={showModal ? true : false}>
        {posts}
        {linkToBlog && (
          <Text fontSize={16} fontWeight={700} textAlign={'right'} >
            <Link href={'/blog'}>
              blog home {'>'}
            </Link>
          </Text>
        )}
      </Container>
      {showModal && (
        <Modal
            video={videoURL}
            closeModal={() => setShowModal(false)}
        />
      )}
    </>
   )
}