import styled from "styled-components";

export interface MicroBlogProps {
  $blur?: boolean
}

export const Container = styled.div<MicroBlogProps>`
  -webkit-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -moz-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -o-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  -ms-filter: ${({$blur}) => $blur ? 'blur(5px)' : 'unset'};
  filter: ${({$blur}) => $blur ? 'blur(5px)' : 'uset'};
  background-color: ${({$blur}) => $blur ? '#ffffff' : 'uset'};
  transition: ${({theme}) => theme.transitions.fast};
`;

