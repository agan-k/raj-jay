import Link from 'next/link';
import { FlexBox, LinkArrow } from '../../components';

export default function Anchor({children, url, path, target, $color}) {
  return (
    <FlexBox>
      <Link href={url || path} target={target}>
        {children}
      </Link>
      <LinkArrow $color={$color} />
    </FlexBox>
  )
}