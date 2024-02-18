import { useState } from "react";
import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
import { Layout, MicroBlog, FlexBox, Box } from "../../components";
import { Container, Wrapper } from "./styled";
import { Post } from "./components";

export default function BlogHome({postsData}) {
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
    <Layout>
      <Wrapper>
        <Container>
          {posts}
        </Container>
      </Wrapper>
    </Layout>
  )
}

export async function getStaticProps() {
  const postsData = await client.query(
     Prismic.Predicates.at("document.type", "micro_blog"),
     {
        orderings: '[my.micro_blog.date desc]',
        pageSize : 100
     }
  );
  return {
     props: {
        postsData: postsData.results
     },
  }
}