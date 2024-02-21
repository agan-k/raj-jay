import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  height: 5rem;
  width: 5rem;
  margin: 2px;
  opacity: ${({$active}) => $active ? '1' : '.5'};
  cursor: pointer;
  pointer-events: ${({$active}) => $active ? 'none' : 'initial'};
  display: ${({$active}) => $active ? 'flex' : 'initial'};
  justify-content: ${({$active}) => $active ? 'center' : 'initial'};
  padding: ${({$active}) => $active ? 'initial' : '.6rem'};
  &:hover {
    opacity: 1;
    transition: .4s;
  }
`;
export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  border: ${({$active}) => $active ? '1px dashed grey' : 'none'};
  padding: ${({$active}) => $active ? '3px' : 'none'};
  `;
  export const Image = styled.img`
  border: 1px solid rgb(212, 212, 212);
  height: 100%;
  margin: 0 auto;
`;