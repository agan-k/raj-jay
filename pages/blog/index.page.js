import { useState } from "react";
import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
import { Layout, Banner, Modal } from "../../components";
import { BANNER_QUOTE } from "../../utils/constants";
import { Container } from "./styled";
import { Post } from "./components";

export default function BlogHome({postsData, content}) {
  const [showModal, setShowModal] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const quotesData = content.results.filter(result =>
    result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
 );
 const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 
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
      <Banner quote={quotes[BANNER_QUOTE.blog]} $imagePath={'/images/banner5.png'} />
      <Container>
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
       pageSize : 100
    }
 );
  const postsData = await client.query(
     Prismic.Predicates.at("document.type", "micro_blog"),
     {
        orderings: '[my.micro_blog.date desc]',
        pageSize : 100
     }
  );
  return {
     props: {
      content,
      postsData: postsData.results
     },
  }
}