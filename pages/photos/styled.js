import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
`;
export const Photo = styled.div`
  min-height: min-content;
  flex-basis: 13%;
  display: flex;
  padding-top: ${({theme}) => theme.space[2]}px;
  padding-bottom: ${({theme}) => theme.space[2]}px;
`;

export const Image = styled.img`
  cursor: pointer;
  max-height: ${({theme}) => theme.space[7]+theme.space[5]}px;
  border-radius: 15px;
  margin: 0 auto;
`;