import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

interface ArticleLinkStyleProps {
  $marginLeft: string
  $pointerEvents: string
}

export const Container = styled.li<ArticleLinkStyleProps>`
  display: flex;
  list-style: none;
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  font-style: italic;
  padding-left: ${({theme}) => theme.space[1]}px;
  ${mediaQuery({
    marginLeft: ['unset', ({$marginLeft}) => $marginLeft],
    PointerEvent: ['unset', ({$pointerEvents}) => $pointerEvents]
  })}
  h3 {
    margin-top: ${({theme}) => theme.space[3]}px;
    margin-bottom: 0;
  }
  h4 {
    margin: 0;
    font-weight: ${({theme}) => theme.fontWeight.thin};
  }
`;

export const LeftArrow = styled.div`
  ${mediaQuery({
    display: ['none', 'unset']
  })}
`;
