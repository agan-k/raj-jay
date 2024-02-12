import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 30%;
  margin: 0 auto;
  -webkit-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -moz-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -o-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  -ms-filter: ${({blur}) => blur ? 'blur(5px)' : 'unset'};
  filter: ${({blur}) => blur ? 'blur(5px)' : 'uset'};
  background-color: ${({blur}) => blur ? '#ffffff' : 'uset'};
  transition: .3s;
`;

