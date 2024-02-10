import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(94, 94, 94);
  `;

export const BandCampPlayer = styled.div`
  width: 40%;
  flex: none;
`;

export const Cover = styled.div`
  width: 70%;
  padding-bottom: 1rem;
  margin: 0 auto;
  img {
    max-width: 100%;
    border: 1px solid rgb(212,212,212)
  }
`;

export const Info = styled.div`
  width: 50%;
  flex: none;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  h3 {
    margin-top: 0;
  }
`;