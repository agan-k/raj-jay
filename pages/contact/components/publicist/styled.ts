import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${({theme}) => theme.space[5]}px;
  img {
    height: ${({theme}) => theme.space[6]}px;
  }
`;