import { RichText } from "prismic-reactjs";
import {Container, PressLogo, ArticleBody} from "./styled";

interface ArticleProps {
  currentArticle: any
}

export const Article: React.FC<ArticleProps> = ({currentArticle}) => {

  return(
    <Container>
      <PressLogo src={currentArticle.img.url} />
      <ArticleBody>
        {RichText.render(currentArticle.content_body)}
      </ArticleBody>
    </Container>
  );
}