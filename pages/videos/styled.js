import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  margin: 0 auto;
  -webkit-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -moz-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -o-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -ms-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  filter: ${({$blur}) => $blur ? 'blur(5px)' : 'uset'};
  background-color: ${({$blur}) => $blur ? '#ffffff' : 'uset'};
  transition: ${({theme}) => theme.transitions.fast};
`;
export const Gallery = styled.div`
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mediaQuery({
    display: ['unset', 'flex']
  })}
  
`;
export const VideoContainer = styled.div`
  ${mediaQuery({
    width: ['100%', '29%']
  })}
  p {
    margin-top: 0;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
`;