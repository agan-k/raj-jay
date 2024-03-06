import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  position: relative;
  ${mediaQuery({
    display: ['block', 'flex'],
    marginBottom: ['unset', ({theme}) => theme.space[4]+'px'],
  })}
  aside {
    ${mediaQuery({
      width: ['unset', '60%'],
    })}
  }
  `;
  type $pointer: boolean;
  export const TitleImage = styled.img<$pointer>`
  ${mediaQuery({
    width: ['100%', '60%'],
  })}
  display: block;
  cursor: ${({$pointer}) => pointer ? 'pointer' : ''};
`;

export const Date = styled.div`
  border-top: ${({theme}) => theme.borders.dashedGray};
  font-size: ${({theme}) => theme.fontSizes[6]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  text-transform: uppercase;  
  white-space: nowrap;
  margin-bottom: ${({theme}) => theme.space[4]}px;
  `;

export const Title = styled.div`
  ${mediaQuery({
    fontSize: [
      ({theme}) => theme.fontSizes[6]+'px',
      ({theme}) => theme.fontSizes[10]+'px'
    ],
    fontWeight: [
      'unset',
      ({theme}) => theme.fontWeight.thin,
    ],
    letterSpacing: [
      'unset',
      ({theme}) => theme.letterSpacing[3]+'px',
    ],
    color: [
      'unset', 
      ({theme}) => theme.colors.subtle
    ],
  })}
  
`;

export const Body = styled.div`
  ${mediaQuery({
    width: ['100%', '40%'],
    borderTop: [
      'unset',
      ({theme}) => theme.borders.dashedGray,
    ],
  })}
  img {
    margin: 16px 15% 0;
    ${mediaQuery({
      width: ['100%', '70%'],
      margin: ['0', '16px 15% 0'], //lg screen centered
    })}
  }
`;