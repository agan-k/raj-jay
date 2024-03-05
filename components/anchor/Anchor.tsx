import { ReactNode } from 'react';
import Link from 'next/link';
import { FlexBox, LinkArrow, Text } from '..';

interface AnchorProps {
  children: ReactNode
  $color?: string
  url?: string
  path?: string
  target?: string
}

export const Anchor: React.FC<AnchorProps> = ({children, url, path, target, $color}) => {
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