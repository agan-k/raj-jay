import Link from 'next/link';
import { FlexBox, LinkArrow, Text } from '../../components';
import {theme} from '../../theme';

export default function Anchor({children, url, path, target, $color}) {
  return (
    <FlexBox>
      <Link href={url || path} target={target}>
        <Text $color={$color}>
          {children}
        </Text>
      </Link>
      <LinkArrow $color={$color} />
    </FlexBox>
  );
}