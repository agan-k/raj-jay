import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  `;

export const BandCampPlayer = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const Cover = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  border: 1px dashed grey;
  img {
    width: 100%;
    border: 1px solid rgb(212,212,212)
  }
`;

export const Info = styled.div`
  width: 50%;
  ul {
    margin: 0 0 12px 0;
    padding: 0;
  }
  li {
    list-style: none;
    font-size: 14px;
    strong {
      font-weight: 400;
    }
    em {
      font-weight: 100;
    }
  }
  h3 {
    font-size: 40px;
    margin-bottom: 0;
  }
  h4 {
    margin: 0 0 16px;
    font-size: 32px;
    font-weight: 100;
  }
  p {
    font-size: 14px;
    line-height: 16px;
  }
  ol {
    padding-left: 16px;
    li {
      list-style: numbered;
      font-weight: 100;
    }
  }
`;