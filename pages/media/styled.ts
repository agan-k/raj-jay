import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div<{$blur: boolean}>`
  gap: 64px;
  ${mediaQuery({
    display: ['flex', 'flex'],
    flexDirection: ['column', 'row']
  })}
  -webkit-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -moz-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -o-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -ms-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  filter: ${({$blur}) => $blur ? 'blur(5px)' : 'uset'};
  background-color: ${({$blur}) => $blur ? '#ffffff' : 'uset'};
  transition: ${({theme}) => theme.transitions.fast};
`;

export const PhotoGallery = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
  align-content: start;
  flex-wrap: wrap;
  ${mediaQuery({
    justifyContent: ['center', 'start'],

    gap: ['4px', '8px'],
    paddingLeft: [
      'unset', 
      ({theme}) => theme.space[4]+'px',
    ]
  })}
`;

export const Photo = styled.div`
  height: 128px;
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${mediaQuery({
    height: [
      ({theme}) => theme.space[7]-
      theme.space[4]+'px',
      ({theme}) => theme.space[7]+'px',
    ],
    width: [
      ({theme}) => theme.space[7]-
      theme.space[4]+'px',
      ({theme}) => theme.space[7]+'px',
    ]
  })}
`;

export const PhotoThumb = styled.img`
  height: 200px;
  cursor: pointer;
  ${mediaQuery({
  
  })}
`;

export const VideoGallery = styled.div`
  ${mediaQuery({
    paddingLeft: [
      'unset',
      ({theme}) => theme.space[4]+'px',
    ]
  })}
`;

export const VideoContainer = styled.div`
  p {
    margin-top: 0;
    font-size: 12px;
    ${mediaQuery({
      fontSize: [
        'unset',
        ({theme}) => theme.fontSizes[3]+'px'
      ],
      paddingLeft: ['8px', 'unset']
    })}
    }
  img {
    cursor: pointer;
    ${mediaQuery({
      width: ['96%', '80%'],
      margin: ['0 2%', 'unset']
    })}
  }
`;