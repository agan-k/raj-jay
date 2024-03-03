import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  ${mediaQuery({
    display: ['unset', 'flex'],
    justifyContent: ['unset', 'space-between'],
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
  width: 65%;
  display: flex;
  justify-content: start;
  gap: 16px;
  align-content: start;
  flex-wrap: wrap;
  ${mediaQuery({
    display: ['unset', 'flex'],
  })}
`;
export const Photo = styled.div`
  min-height: min-content;
  flex-basis: 40%;
  display: flex;
  padding-top: ${({theme}) => theme.space[2]}px;
  padding-bottom: ${({theme}) => theme.space[2]}px;
  img {
    cursor: pointer;
    border-radius: 15px;
    margin: 0 auto;
    ${mediaQuery({
      width: ['100%', 'unset'],
      maxHeight:[
        'unset',
        ({theme}) => theme.space[7]+theme.space[3]+'px'
      ]
    })}
  }
`;

export const VideoGallery = styled.div`
  width: 30%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
  ${mediaQuery({
    display : ['unset', 'flex'],
  })}
`;

export const VideoContainer = styled.div`
  ${mediaQuery({
    // width: ['100%', '29%']
  })}
  p {
    margin-top: 0;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
`;