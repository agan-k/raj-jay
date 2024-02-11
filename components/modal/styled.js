import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.794);
  z-index: 998;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  p {
    color: rgb(161, 161, 161);
    font-weight: 100;
    font-size: .7rem;
    font-style: italic;
    margin: 0;
    width: 100%;
  }
`;

export const Image = styled.img`
  height: ${({vertical}) => vertical ? '80%' : '70%'};
  margin-top: ${({vertical}) => vertical ? '2%' : '5%'};
`;
export const VideoWrapper = styled.div`
  position: relative;
  padding-top: 5%;
  width: 700px;
  height: 500px;
  margin: 0 auto;
`;

