import Link from "next/link";
import { RichText } from "prismic-reactjs";
import {Container} from "./styled";

export default function Article({currentArticle}) {

  return(
    <Container>
      <img src={currentArticle.img.url} style={{maxHeight: '3rem'}}/>
      {RichText.render(currentArticle.content_body)}
    </Container>
  );
}