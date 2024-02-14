import React, {useState} from 'react';
import Link from 'next/link';
import {Modal, Text, Anchor, FlexBox} from "../../components";

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
          <FlexBox justifyContent={'end'}>
            <Anchor path={'/blog'}>
              <Text fontSize={16}>
                ...more, blog home
              </Text>
            </Anchor>
          </FlexBox>
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