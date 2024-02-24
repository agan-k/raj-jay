import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import {Container} from './styled';
import { Text, FlexBox, LinkArrow} from '../../../components';

export default function LinkCard({link}) {
  return (
    <Container>
      <Link href={link.url.url} target="_blank">
          <FlexBox>
            <Text 
              $fontWeight={500}
              $fontStyle={'italic'}
              $whiteSpace={'nowrap'}
              >
              {RichText.asText(link.name)}&nbsp;
            </Text>
            <Text 
              $fontWeight={500}
              $fontStyle={'italic'}
              >{link.country_code}
            </Text>
            <LinkArrow />
          </FlexBox>
          <Text 
            $fontWeight={100}
            $fontStyle={'italic'}
            $textTransform={'lowercase'}
          >{link.occupation}</Text>
      </Link>
    </Container>
  );
}