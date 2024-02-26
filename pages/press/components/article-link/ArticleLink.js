import Link from "next/link";
import { RichText } from "prismic-reactjs";
import {Container, LeftArrow} from "./styled";
import { useRouter } from "next/router";
import {FlexBox, Box} from "../../../../components";

export default function ArticleLink({link, articleType, uid, index}) {
  const router = useRouter();
  const currentUID = router.asPath;
  const isCurrentArticle =  
    Boolean(currentUID === `/press/${uid}`
  );
  const isPressHome = 
    Boolean(
      currentUID === '/press' && 
      articleType === 'press-reviews' && 
      index === 0
  );

  return(
    <Container 
      id={link.id}
      $marginLeft={isPressHome || isCurrentArticle ? '-2rem' : '' }
      $pointerEvents={isPressHome || isCurrentArticle ? 'none' : 'initial' }
    >
      <LeftArrow>
        {isPressHome || isCurrentArticle ?
          <>&larr;</> : null
        }
      </LeftArrow>
      <Box>
        {RichText.render(link.data.content_body.filter(item => item.type == 'heading3'))}
        <Link href="/press/[id]" as={`/press/${link.uid}`}>
          {RichText.render(link.data.content_body.filter(item => item.type == 'heading4'))}
        </Link>
      </Box>
    </Container>
  );
}