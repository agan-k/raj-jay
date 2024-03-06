import { RichText } from 'prismic-reactjs';
import {Container, Quote} from './styled';

export interface BannerProps {
  quote?: any
  $imagePath?: string
}

export const Banner: React.FC<BannerProps> = ({quote, $imagePath}) => {
  return(
    <Container $imagePath={$imagePath}>
      {quote && (
        <Quote>
          {RichText.render(quote.data.press_quote)}
        </Quote>
      )}
    </Container>
  );
}