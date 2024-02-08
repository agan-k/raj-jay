import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  margin: 0 auto;
  padding-top: 3rem;
  -webkit-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -moz-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -o-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -ms-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  filter: ${({blur}) => blur ? 'blur(5px)' : 'uset'};
  background-color: ${({blur}) => blur ? '#ffffff' : 'uset'};
  transition: .3s;
`;
export const Gallery = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Video = styled.div`
 width: 23%;
 margin: 0 2rem;
  p {
    margin: 0 0 0 1rem;
  }
  img {
    width: 100%;
    margin: 1rem 1rem 0 1rem;
    cursor: pointer;
    opacity: .7;
    transition: .4s;
 }
`;