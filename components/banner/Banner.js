import {Container} from './styled';
import { Text } from '../../components';
import { RichText } from 'prismic-reactjs';
import {Quote} from './styled';

export default function Banner({quote, imagePath}) {
  return(
    <Container imagePath={imagePath}>
      {quote && (
        <Quote>
          {RichText.render(quote.data.press_quote)}
        </Quote>
      )}
    </Container>
  )
}