import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  gap: 64px;
  ${mediaQuery({
    display: ['unset', 'flex'],
    // justifyContent: ['unset', 'space-between'],
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
    display: ['unset', 'flex'],
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
  ${mediaQuery({
  })}
  p {
    margin-top: 0;
    font-size: 12px;
  }
  img {
    width: 80%;
    cursor: pointer;
  }
`;