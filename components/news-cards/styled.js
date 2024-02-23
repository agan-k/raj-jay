import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
`;

export const CardContainer = styled.div`
  height: min-content;
  padding: ${({theme}) => theme.space[3]}px;
  flex-basis: 33%;
  text-decoration: none;
  transition: ${({theme}) => theme.transitions.slow};
  cursor: pointer; //for the video
  h3 {
    font-size: ${({theme}) => theme.fontSizes[6]}px;
    font-weight: ${({theme}) => theme.fontWeight.thick}
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
  &:hover {
    background: ${({theme}) => theme.colors.diffused};
    transition: ${({theme}) => theme.transitions.fast};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: ${({theme}) => theme.space[6]+12}px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    max-height: ${({theme}) => theme.space[6]+12}px;
    max-width: ${({theme}) => theme.space[7]+theme.space[6]}px;
    opacity: ${({theme}) => theme.opacity.hazy};
    padding: ${({theme}) => theme.space[2]};
  }
`;
  
export const Date = styled.div`
  text-transform: uppercase;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  margin-bottom: ${({theme}) => theme.space[4]}px;
`;