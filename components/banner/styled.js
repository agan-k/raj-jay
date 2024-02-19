import styled from "styled-components";

export const Container = styled.div`
position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 16px;
  img {
    width: 100%;
  }
`;
export const Quote = styled.div`
  width: 40%;
  position: absolute;
  top: 32px;
  left: 64px;
  p {
    color: rgb(212,212,212);
    font-weight: 100;
    font-size: 12px;
  }
  p:nth-child(2) {
    text-align: right;
  }
`;