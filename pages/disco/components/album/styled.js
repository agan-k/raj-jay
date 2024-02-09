import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(94, 94, 94);
`;
export const Cover = styled.img`
  border: 1px solid rgb(212, 212, 212);
  width: ${({width}) => width};
`;
export const Info = styled.div`
  flex: 5;
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

export const BandCampPlayer = styled.div`
flex: 1;
`;