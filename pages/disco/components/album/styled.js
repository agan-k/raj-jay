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
  // padding-left: 32px;
  ul {
    margin: 0 0 12px 0;
    padding: 0;
  }
  li {
    list-style: none;
    // font-weight: 100;
    font-size: 12px;
  }
  h3 {
    margin-top: 0;
  }
  p {
    font-size: 12px;
    margin: 0;
  }
`;