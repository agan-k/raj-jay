import { RichText } from "prismic-reactjs";
import { Container } from "./styled";

export default function BannerQuotes({quotes, randomQuote}) {

  return(
    <Container>
      {RichText.render(quotes[randomQuote].data.press_quote)}
    </Container>
  );
}