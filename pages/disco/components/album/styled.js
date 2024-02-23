import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  `;

export const BandCampPlayer = styled.div`
  width: 100%;
  margin-top: ${({theme}) => theme.space[4]}px;
`;

export const Cover = styled.div`
  width: 100%;
  padding: ${({theme}) => theme.space[3]}px;
  display: flex;
  justify-content: center;
  border: ${({theme}) => theme.borders.dashedGray};
  img {
    width: 100%;
    border: ${({theme}) => theme.borders.thinCharcoal};
  }
`;

export const Info = styled.div`
  width: 50%;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    font-size: ${({theme}) => theme.fontSizes[3]}px;
    strong {
      font-weight: ${({theme}) => theme.fontWeight.bold};
    }
    em {
      text-transform: lowercase;
      font-weight: ${({theme}) => theme.fontWeight.thin};
    }
  }
  h3 {
    font-size: ${({theme}) => theme.fontSizes[7]+theme.fontSizes[1]}px;
    margin-bottom: 0;
  }
  h4 {
    margin: 0;
    margin-bottom: ${({theme}) => theme.space[4]}px;
    font-size: ${({theme}) => theme.fontSizes[7]}px;
    font-weight: 100;
  }
  p {
    font-size: ${({theme}) => theme.fontSizes[3]}px;
    line-height: ${({theme}) => theme.space[4]}px;
  }
  ol {
    padding-left: ${({theme}) => theme.space[4]}px;
    li {
      list-style: numbered;
    }
  }
`;