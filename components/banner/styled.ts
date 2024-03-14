import styled from "styled-components";
import { BannerProps } from "./Banner";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div<BannerProps>`
  position: relative;
  height: 200px;
  margin-bottom: ${({theme}) => theme.space[4]}px;
  overflow: hidden;
  background: url('/images/banner.png');
  background-size: cover;
  background-color: black;
  ${mediaQuery({
    backgroundPosition: ['right', 'unset'],
    width: ['106%', '100%'],
    left: ['-4%', '0'],
  })}
`;
export const Quote = styled.div`
  position: absolute;
  ${mediaQuery({
    width: ['70%', '40%'],
    top: [
      ({theme}) => theme.space[2]+'px',
      ({theme}) => theme.space[5]+'px',
    ],
    left: [
      ({theme}) => theme.space[4]+'px',
      ({theme}) => theme.space[5]+'px',
    ]
  })}
  p {
    color: ${({theme}) => theme.colors.diffused};
    font-weight: 100;
    line-height: ${({theme}) => theme.lineHeight.secondary};
    letter-spacing: ${({theme}) => theme.letterSpacing[1]}px;
    font-family: Garamond;
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[3]+'px',
        ({theme}) => theme.fontSizes[4]+'px'
      ]
    })}
  }
  p:nth-child(2) {
    font-size: ${({theme}) => theme.fontSizes[3]}px;
    ${mediaQuery({
      textAlign: ['left', 'right'],
    })}
  }
`;