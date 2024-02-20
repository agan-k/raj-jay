import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 8px;
  border-top-left-radius: 50px 50px;
  border-top-right-radius: 50px 50px;
  overflow: hidden;
  background-color: black;
  background: url('${({imagePath}) => imagePath}');
  background-size: cover;
  background-position: right;
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