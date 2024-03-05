import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";
interface AlbumThumbState {
  $active: boolean
}
export const Container = styled.div<AlbumThumbState>`
  opacity: ${({$active}) => $active ? '1' : '.4'};
  cursor: pointer;
  pointer-events: ${({$active}) => $active ? 'none' : 'initial'};
  display: ${({$active}) => $active ? 'flex' : 'initial'};
  &:hover {
    opacity: 1;
    transition: .4s;
  }
  ${mediaQuery({
    pointerEvents: [
      'unset',
      ({$active}) => $active ? 'none' : 'initial'
    ],
    opacity: [
      'unset',
      ({$active}) => $active ? '1' : '.4'
    ],
    padding: [
      'initial',
      ({$active}) => $active ? 'initial' : '.6rem'
    ],
    margin: [
      ({theme}) => `${theme.space[3]}px auto`,
      ({theme}) => theme.space[1]+'px',
    ],
    height: [
      ({theme}) => theme.space[8]+'px',
      ({theme}) => theme.space[6]+theme.space[4]+'px'
    ],
    width: [
      ({theme}) => theme.space[8]+'px',
      ({theme}) => theme.space[6]+theme.space[4]+'px'
    ],
  })}
`;

export const ImageWrapper = styled.div<AlbumThumbState>`
  height: 100%;
  width: 100%;
  ${mediaQuery({
    padding: [
      'unset',
      ({$active, theme}) => $active ? theme.space[2] + 'px' : 'unset'
    ],
    border: [
      'unset',
      ({$active, theme}) => $active ? theme.borders.dashedGray : 'none'
    ]
  })}
`;

export const Image = styled.img<AlbumThumbState>`
  border: ${({theme}) => theme.borders.thinCharcoal};
  height: 100%;
  margin: 0 auto;
`;