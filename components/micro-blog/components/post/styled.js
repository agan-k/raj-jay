import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  padding: ${({theme}) => theme.space[3]}px;
`;

export const TitleImage = styled.img`
  width: 100%;
  max-width: 50%;
  display: block;
  margin: 0 auto;
  cursor: ${({pointer}) => pointer ? 'pointer' : ''};
`;

export const Date = styled.div`
  white-space: nowrap;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  text-transform: uppercase;
  margin-bottom: ${({theme}) => theme.space[4]}px;
  ${mediaQuery({
    fontSize: [
      ({theme}) => theme.fontSizes[6]+'px',
      'unset'
    ]
  })}
`;

export const Body = styled.div`
  img {
    width: 90%;
    margin-left: 5%;
  }
`;