import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import {Container} from './styled';
import { Text, FlexBox, LinkArrow } from '../../../components';

export default function LinkCard({link}) {
  return (
    <Container>
      <Link href={link.url.url} target="_blank">
        <Text 
          fontWeight={500}
          fontStyle={'italic'}
          >
          {RichText.asText(link.name)}&nbsp;{link.country_code}
        </Text>
        <FlexBox justifyContent={'space-between'}>
          <Text 
            fontWeight={100}
            fontStyle={'italic'}
          >{link.occupation}</Text>
          <LinkArrow />
        </FlexBox>
      </Link>
    </Container>

  );
}