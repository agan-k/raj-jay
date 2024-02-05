import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  padding: 3rem 1rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 90vh;
  transition: .3s;
  -webkit-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -moz-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -o-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -ms-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  filter: ${({blur}) => blur ? 'blur(5px)' : 'uset'};
  background-color: ${({blur}) => blur ? '#ffffff' : 'uset'};
  transition: .3s;
`;

export const Post = styled.div`
  width: 50%;
  img {
    height: 10rem;
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;
export const PostsList = styled.div`
  width: 35%;
  margin-top: 1rem;
`;
export const PostLink = styled.div`
  justify-content: space-between;
  a {
    max-width: 15%;
    overflow: hidden;
  }
`;
export const Date = styled.div`
  white-space: nowrap;
`;

