import React, {useState} from 'react';
import {Modal} from "../../components";

import {Post} from "./components/post";
import {Container} from './styled';

export default function MicroBlog({postsData}) {
   const [showModal, setShowModal] = useState(false)
   const [media, setMedia] = useState(null)
   
   const posts = postsData.map(post =>
      <Post
         key={post.id} 
         data={post.data}
         setShowModal={setShowModal}
         setMedia={setMedia}
      />
   );

   return (
    <>
      <Container $blur={showModal ? true : false}>
        {posts}
      </Container>
      {showModal && (
        <Modal
            media={media}
            closeModal={() => setShowModal(false)}
        />
      )}
    </>
   )
}