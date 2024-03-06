import { RichText } from "prismic-reactjs";
import {Container} from "./styled";

interface QuoteProps {
  quote: any
}
 
export const Quote: React.FC<QuoteProps> = ({quote}) => {
  return(
    <Container>
      { RichText.render(quote.data.press_quote) }
    </Container>
  )
}