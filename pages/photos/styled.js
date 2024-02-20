import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
`;
export const Photo = styled.div`
  min-height: min-content;
  flex-basis: 13%;
  display: flex;
  padding: 4px 0;
  `;
  export const Image = styled.img`
  max-height: 160px;
  border-radius: 10px;
  margin: 0 auto;
`;