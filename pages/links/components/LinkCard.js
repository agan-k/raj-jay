import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import {Container} from './styled';
import { Text } from '../../../components';

export default function LinkCard({link}) {
  return (
    <Container>
      <Link href={link.url.url} target="_blank">
        <Text 
          fontWeight={500}
          fontStyle={'italic'}
        >{RichText.asText(link.name)}</Text>
        <Text 
          fontWeight={500}
          fontStyle={'italic'}
        >{link.country_code}</Text>
        <Text 
          fontWeight={100}
          fontStyle={'italic'}
        >{link.occupation}</Text>
      </Link>
    </Container>

  );
}