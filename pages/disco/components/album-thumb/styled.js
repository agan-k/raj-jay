import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  height: 6rem;
  width: 6rem;
  margin: 2px;
  opacity: ${({active}) => active ? '1' : '.4'};
  cursor: pointer;
  pointer-events: ${({active}) => active ? 'none' : 'initial'};
  display: ${({active}) => active ? 'flex' : 'initial'};
  justify-content: ${({active}) => active ? 'center' : 'initial'};
  padding: ${({active}) => active ? 'initial' : '.2rem'};
  &:hover {
    opacity: 1;
    transition: .4s;
  }
`;
export const Image = styled.img`
  border: 1px solid;
  border-color: ${({active}) => active ? 'black' : 'rgb(212, 212, 212)'};
  height: 100%;
  margin: 0 auto;
`;