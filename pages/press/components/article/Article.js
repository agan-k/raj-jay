import { RichText } from "prismic-reactjs";
import {Container, PressLogo, ArticleBody} from "./styled";

export default function Article({currentArticle}) {

  return(
    <Container>
      <PressLogo src={currentArticle.img.url} />
      <ArticleBody>
        {RichText.render(currentArticle.content_body)}
      </ArticleBody>
    </Container>
  );
}