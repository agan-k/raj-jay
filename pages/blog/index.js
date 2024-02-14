import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
import { Layout, MicroBlog, FlexBox, Box } from "../../components";

export default function BlogHome({postsData}) {
  //TODO: create masonry layout
  return (
    <Layout>
      <Box>
        <FlexBox justifyContent={'center'}>
          <Box width={'30%'}>
            <MicroBlog postsData={postsData} linkToBlog={false} />
          </Box>
        </FlexBox>
      </Box>
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