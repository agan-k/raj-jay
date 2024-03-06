import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import {LinkCardContainer} from './styled';
import { Text, FlexBox, LinkArrow} from '../../../components';

interface LinkCardProps {
  link: any
}

export const LinkCard: React.FC<LinkCardProps> = ({link}) => {
  return (
    <LinkCardContainer>
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
          </FlexBox>
          <FlexBox>
            <Text 
              $fontWeight={100}
              $fontStyle={'italic'}
              $textTransform={'lowercase'}
            >{link.occupation}</Text>
            <LinkArrow />
          </FlexBox>
      </Link>
    </LinkCardContainer>
  );
}