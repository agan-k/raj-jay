import Link from "next/link";
import { PostLink, Date, PostsList } from "../../styled";
import formatPrismicDate from "../../../../utils/formatPrismicDate";
import { RichText } from "prismic-reactjs";

export default function PostsLinks({blog}) {
  const list = blog.map(post => 
    <PostLink key={post.id}>
       <Date>{formatPrismicDate(post.data.date)}</Date>
       <Link href="/blog/[id]" as={`/blog/${post.uid}`}>
          {RichText.asText(post.data.content_body.filter(item => item.type == 'heading3'))}<br />
          {RichText.asText(post.data.content_body.filter(item => item.type == 'heading4'))}
       </Link>
    </PostLink>
  );
  return <PostsList>{list}</PostsList>;
}