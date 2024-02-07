import Link from "next/link";
import { RichText } from "prismic-reactjs";
import getContentPaths from "../../../../utils/getContentPaths";
import {Container} from "./styled";
import { useRouter } from "next/router";
import {FlexBox, Box} from "../../../../components";

export default function ArticleLink({link, articleType, uid}) {
  const router = useRouter();
  const currentUID = router.asPath;
  console.log('here: ', currentUID)
  console.log('uid: ', uid)
  const isCurrentArticle =  
    Boolean(currentUID === `/press/${uid}`);
  return(
    <Container marginLeft={isCurrentArticle && '-2rem'}>
      <Box>
        {isCurrentArticle && (
          <>&larr;</>
        )}
      </Box>
      <Box>
        {RichText.render(link.data.content_body.filter(item => item.type == 'heading3'))}
        <Link href="/press/[id]" as={`/${getContentPaths(articleType)}/${link.uid}`}>
          {RichText.render(link.data.content_body.filter(item => item.type == 'heading4'))}
        </Link>
      </Box>
    </Container>
  );
}