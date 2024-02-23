import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  height: ${({theme}) => theme.space[6]+theme.space[4]}px;
  width: ${({theme}) => theme.space[6]+theme.space[4]}px;
  margin: ${({theme}) => theme.space[1]}px;
  opacity: ${({$active}) => $active ? '1' : '.4'};
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
  border: ${({$active, theme}) => $active ? theme.borders.dashedGray : 'none'};
  padding: ${({$active, theme}) => $active ? theme.space[2] + 'px' : 'none'};
`;

export const Image = styled.img`
  border: ${({theme}) => theme.borders.thinCharcoal};
  height: 100%;
  margin: 0 auto;
`;