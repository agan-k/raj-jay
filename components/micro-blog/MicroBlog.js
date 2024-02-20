import React, {useState} from 'react';
import {Modal} from "../../components";

import {Post} from "./components/post";
import {Container} from './styled';

export default function MicroBlog({postsData}) {
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