import { RichText } from "prismic-reactjs";
import {Container} from "./styled";
 
export default function Quote({quote}) {
  return(
    <Container>
      { RichText.render(quote.data.press_quote) }
    </Container>
  )
}