import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 90%;
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
  // &::after {
  //   content: "";
  //   flex: auto;
  // }
`;
export const Photo = styled.div`
  height: 15rem;
  width: 33%;
  text-align: center;
  img {
    cursor: pointer;
  }
`;
export const ImageMask = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background:white;
`;
export const Image = styled.img`
  height: ${({orientation}) => orientation === 'vertical' ? '280%' : '170%'};
  &:hover {
    height: ${({orientation}) => orientation === 'vertical' ? '80%' : '55%'};
    margin-top: ${({orientation}) => 
      orientation === 'vertical' ? '8%' : '15%'
    };
  }
`;